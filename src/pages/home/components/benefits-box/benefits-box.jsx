import React, { useRef } from 'react'
import styles from './benefitsbox.module.css'
import benefit1 from './benefit1.png'
import benefit2 from './benefit2.png'
import benefit3 from './benefit3.png'

function BenefitsBox() {

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
        <div className={styles.benefitsboxwrapper}>
            <div className={styles.benefitsbox}>
				<div className={styles.title}>
					<h1 id={styles.benefitstitle}>
						Benefits of MindFuel
					</h1>
				</div>
				<div className={styles.benefitslist}>
					<div className={styles.benefititem}>
						<img src={benefit1} className={styles.image}>
						</img>
						<div className={styles.benefittext}>
							<p id={styles.boldbenefit}>Personalized Support:</p>
							<p id={styles.txt}>Tailored guidance and assistance from our AI-powered therapist.</p>
						</div>
					</div>
					<div className={styles.benefititem}>
						<img src={benefit2} className={styles.image}>
						</img>
						<div className={styles.benefittext}>
							<p id={styles.boldbenefit}>24/7 Accessibility:</p>
							<p id={styles.txt}>Tailored guidance and assistance from our AI-powered therapist.</p>
						</div>
					</div>
					<div className={styles.benefititem}>
						<img src={benefit3} className={styles.image}>
						</img>
						<div className={styles.benefittext}>
							<p id={styles.boldbenefit}>Enhanced Well-being:</p>
							<p id={styles.txt}>Tailored guidance and assistance from our AI-powered therapist.</p>
						</div>
					</div>
				</div>
			</div>
        </div>
	)
}

export default BenefitsBox
