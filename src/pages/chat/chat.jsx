import { useState } from 'react'
// import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import styles from "./chat.module.css";
import "./Chat.css";
import Navbar from '../../navbar';
import Footer from '../../footer';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Explain things like you're a therapist consulting with patients online through chat."
}

function Chat() {
  const [messages, setMessages] = useState([
    {
      message: "Hey there! I'm your personal AI therapist! Welcome! What would you like to discuss today?",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <>
        <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div className={styles.headingwrapper}>
            <div className={styles.heading}>
                Let MindFuel AI Guide You Towards a Happier, Healthier You!
            </div>
        </div>
        <div className={styles.chatcontainer}>
            <div style={{ height: "25rem", width: "80%" , marginTop: "2rem"}}>
                <MainContainer style={{backgroundColor: "transparent"}}>
                <ChatContainer style={{backgroundColor: "transparent"}}>       
                    <MessageList style={{backgroundColor: "transparent", padding: "1rem"}}scrollBehavior="smooth" typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}>
                    {messages.map((message, i) => {
                        console.log(message)
                        return <Message className='msg' key={i} model={message} />
                    })}
                    </MessageList>
                    <MessageInput placeholder="Type message here" onSend={handleSend} />        
                </ChatContainer>
                </MainContainer>
            </div>
        </div>
        <Footer pagename="Disclaimer"/>
    </>
  )
}

export default Chat