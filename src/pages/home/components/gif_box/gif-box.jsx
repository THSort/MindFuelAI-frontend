import React, { useRef } from 'react'
import styles from './gifbox.module.css'
import gif from './gif.mp4'

function GifBox() {

	return (
        <div className={styles.gifboxwrapper}>
            <div className={styles.gifbox}>
                <div className={styles.gifarea}>
                    <video className={styles.gif} src={gif} poster={styles.gif} preload='auto' playsInline webkit-playsInline muted autoPlay loop></video>
                </div>
                <div className={styles.howarea}>
                    <div className={styles.howtitle}>
                        <h3 id={styles.texttitle}>How Mindful Works:</h3>
                    </div>
                    <div className={styles.howlist}>
                        <ul className={styles.listul}>
                            <li className={styles.listelem}>
                                <p>Sign Up and create your profile.</p>
                            </li>
                            <li className={styles.listelem}>
                                <p>Engage in interactive chat sessions with our AI therapist.</p>
                            </li>
                            <li className={styles.listelem}>
                                <p>Track your progress and access tailored resources.</p>
                            </li>
                            <li className={styles.listelem}>
                                <p>Set goals, track achievements, and enhance your well-being.</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.btnbox}>
                        <p id={styles.textgetready}>Ready to Experience MindFuel? Start Your Journey Today!</p>
                        <a href="/sales" className={styles.pricesbtn}>
                            <div className={styles.pricesbtn11}>
                                Start Your Journey!
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default GifBox
