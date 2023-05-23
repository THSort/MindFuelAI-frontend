import React from 'react';
import styles from './dataprotection.module.css'
import Footer from '../../footer';
import Navbar from '../../navbar';

function DataProtection() {
    const user = localStorage.getItem("token");
    const plan = localStorage.getItem("plan");
    console.log(user, plan);
    // console.log("USER:" , user);
    return (
        <>
            <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <div className={styles.pagewrapper}>
                <div className={styles.container}>
                    <div className={styles.alltext}>
                    <span style={{fontWeight: "bold"}}>Data Protection and Privacy (DSGVO) Statement:</span> <br></br>
                    <br></br>At MindFuel, we take data protection and privacy seriously. We are committed to ensuring the confidentiality and security of your personal information. This Data Protection and Privacy (DSGVO) statement outlines how we collect, use, and protect your data when you use our services.<br></br>
                    <br></br><span style={{fontWeight: "bold"}}>Data Collection and Usage:</span><br></br>
                    We collect personal information, such as your name and email address, solely for the purpose of providing our services and delivering personalized support.
                    Your data is used to enhance your user experience, improve our services, and tailor our recommendations to better meet your needs.
                    We do not sell, rent, or share your personal information with any third parties without your explicit consent.<br></br>
                    <br></br><span style={{fontWeight: "bold"}}>Data Security and Storage:</span><br></br>
                    We implement strict security measures to protect your data from unauthorized access, alteration, or disclosure.
                    Your personal information is stored on secure servers with industry-standard safeguards.
                    We retain your data only for as long as necessary to provide our services or comply with legal obligations.<br></br>
                    <br></br><span style={{fontWeight: "bold"}}>User Control and Consent:</span><br></br>
                    You have the right to access, correct, or delete your personal information stored in our systems.
                    You can manage your preferences and consent settings regarding communications and data processing.
                    By using our services, you consent to the collection, processing, and storage of your personal information as outlined in this statement.<br></br>
                    <br></br><span style={{fontWeight: "bold"}}>Cookie Usage:</span><br></br>
                    We use cookies and similar technologies to enhance your browsing experience and gather usage analytics.
                    You have the option to disable cookies through your browser settings, but please note that this may affect the functionality of our services.<br></br>
                    <br></br><span style={{fontWeight: "bold"}}>Third-Party Links:</span><br></br>
                    Our website or services may contain links to third-party websites or applications that are not under our control.
                    We are not responsible for the privacy practices or content of such third-party sites. We encourage you to review their privacy policies.<br></br>
                    <br></br><span style={{fontWeight: "bold"}}>Changes to the DSGVO Statement:</span><br></br>
                    We reserve the right to modify or update this DSGVO statement to reflect any changes in our data handling practices or legal requirements.
                    Any updates will be posted on our website, and we encourage you to review this statement periodically.
                    If you have any questions or concerns regarding our data protection and privacy practices, please contact us through the provided contact information.
                    </div>
                </div>
            </div>
            <Footer pagename="Disclaimer"/>
        </>
    );
}

export default DataProtection;