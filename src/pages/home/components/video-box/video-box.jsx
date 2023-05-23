import React, { useRef, useState } from 'react'
import styles from './videobox.module.css'
import Productvideo from './Productvideo.mp4'
import PicAfterVideo from "./PicAfterVideo.jpg"

function VideoBox() {
    const [toShow, setToShow] = useState("");

	// const counterElement = useRef(null);

	// const incrementCounters = () => {

	// 	// Increment the imperative counter
	// 	counterElement.current.increment();
	// }

	// const decrementCounters = () => {

	// 	// Decrement the imperative counter
	// 	counterElement.current.decrement();
	// }
    // var video = document.getElementById("video");
    const handleVideoEnd = () => {
        setToShow("picture");
        console.log("video ended!!")
    }

	return (
        <div className={styles.videoboxwrapper}>
            <div className={styles.videobox}>
                <div className={styles.videotitle}>
                    <h2 id={styles.text13}>Empowering You to Overcome Life's Challenges with AI-Powered Support</h2>
                </div>
                {/* <div className={styles.video}> */}
                    {toShow!=="picture" && <video onEnded={handleVideoEnd}  className={styles.video} src={Productvideo} preload='auto' playsInline webkiit-playsInline controls muted autoPlay></video>}
                    {toShow==="picture" && <img onEnded={handleVideoEnd}  className={styles.video} src={PicAfterVideo} preload='auto' playsInline webkiit-playsInline controls muted autoPlay></img>}
                {/* </div> */}
                {/* <div className={styles.pricesbtnwrapper}> */}
                    {/* <div className={styles.seepricesbtn}> */}
                        <a href="/sales" className={styles.pricesbtn}>
                            <div className={styles.pricesbtn11}>
                                See Prices
                            </div>
                        </a>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
	)
}

export default VideoBox
