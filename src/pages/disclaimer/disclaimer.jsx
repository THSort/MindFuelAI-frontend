import React from 'react';
import styles from './disclaimer.module.css'
import Footer from '../../footer';
import Navbar from '../../navbar';

function Disclaimer() {
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
                    <span style={{fontWeight: "bold"}}>Disclaimer:</span> This therapist is an AI-based system designed to provide general mental health information and support. It is not intended to diagnose or treat any mental health condition and should not be used as a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing severe or persistent symptoms, or have concerns about your mental health, please seek the advice of a licensed mental health professional. By using this e-therapist, you acknowledge that you understand and accept these limitations.
                    </div>
                </div>
            </div>
            <Footer pagename="Disclaimer"/>
        </>
    );
}

export default Disclaimer;