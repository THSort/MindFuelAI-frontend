import React from 'react';
import styles from './dashboard.module.css';
import message from "./Message.png";
import Footer from '../../footer';
import Navbar from '../../navbar';

function Dashboard() {
    return (
        <>
        <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div className={styles.dashboard_container}>
            <div className={styles.box}>
                <div className={styles.heading}>
                    <h1 id={styles.h1text}>Got Something On Your Mind That You Want To Talk About?</h1>
                </div>
                <div className={styles.imgcontainer}>
                    <img className={styles.pngimage} src={message}></img>
                    <a href="/chat" className={styles.btncontainer}>
                        <div className={styles.btn}>Start a Session With Your AI Therapist Now!</div>
                    </a>
                </div>
                
            </div>
        </div>
        <Footer pagename="Dashboard"/>
        </>
    );
}
  
export default Dashboard;