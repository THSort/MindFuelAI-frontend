import React, { useRef } from 'react'
import styles from './logotagline.module.css'
import Logomindfuel from './Logomindfuel.png'

function LogoTagline() {

	// const counterElement = useRef(null);

	// const incrementCounters = () => {

	// 	// Increment the imperative counter
	// 	counterElement.current.increment();
	// }

	// const decrementCounters = () => {

	// 	// Decrement the imperative counter
	// 	counterElement.current.decrement();
	// }

	return (
		<div className={styles.LogoTaglineBox}>
			<div className={styles.logo}>
                <img className={styles.logoimg} src={Logomindfuel}></img>
            </div>
            <div className={styles.title}>
                <h1 id={styles.text01}>MindFuel: Your Personal AI Therapist for Empowered Well-being</h1> 
            </div>
            <div className={styles.subtitle}>
                <h2 id={styles.text02}>No Matter What You're Going Through, Our AI Therapist is Here to Help and Support You</h2>
            </div>
		</div>
	)
}

export default LogoTagline
