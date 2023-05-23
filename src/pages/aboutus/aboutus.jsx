import React from 'react';
import styles from './aboutus.module.css'
import Footer from '../../footer';
import Navbar from '../../navbar';

function AboutUs() {
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
                    Partnered up during a course project at Catolica Lisbon Business School, our team faced the challenge of building a business within a timeframe of two months. While all being sensitive and recognizing the significance of mental health in our lives, we chose to focus our project on this subject. Near or far, we all encounter the importance of nurturing our mental well-being and that of others.<br></br>
                    <br></br>Understanding that addressing mental health concerns can be overwhelming and stressful for many, we conceived the concept of a specialized chat bot powered by artificial intelligence. This intelligent companion is designed to offer support and guidance without judgment, addressing the difficulties that people face and being available whenever it's needed — even for ourselves.
                    </div>
                </div>
            </div>
            <Footer pagename="AboutUs"/>
        </>
    );
}

export default AboutUs;