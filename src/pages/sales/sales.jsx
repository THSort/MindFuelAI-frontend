import React from 'react';
import styles from './sales.module.css'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Payment from '../payment/payment';
import Footer from '../../footer';
import Navbar from '../../navbar';

function Sales() {
    const user = localStorage.getItem("token");
    const plan = localStorage.getItem("plan");
    console.log(user, plan);
    // console.log("USER:" , user);
    return (
        <>
        <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div className={styles.salescontainer}>
            <div className={styles.pricingtable}>
                <div className={styles.heading}>
                    <h1 id={styles.h1text}>Pricing Table</h1>
                </div>
                <div className={styles.subheading}>
                    <h2 id={styles.h3text}>
                        Choose Your Best Plan
                    </h2>
                </div>
                <div className={styles.plansbox_wrapper}>
                    <div className={styles.plans_box}>
                        <div className={styles.planitem}>
                            <div className={styles.plan_namebox}>
                                <h3 id={styles.planname}>7 DAYS <br></br> FREE-TRIAL</h3>
                            </div>
                            <div className={styles.pricebox}>
                                <h1 id={styles.price}>0,00€</h1>
                            </div>
                            <div className={styles.featuresbox}>
                                <ul className={styles.features_list}>
                                    <li>
                                        Personalized Guidance
                                    </li>
                                    <li>
                                        24/7 Accessibility
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.btn}>
                                {user && !plan &&
                                
                                    <Popup trigger={<button type="button" className={styles.white_btn}>Try It Now!</button>} modal nested>
                                        {<Payment/>}
                                    </Popup>
                                }
                                {user && plan=="free-trial" &&
                                <Link to="/dashboard">
                                    <div style={{color: "#b773fc", 
                                    fontFamily: "'JetBrains Mono', monospace"}}>
                                        Your Plan
                                    </div>
                                </Link>}
                                {!user && 
                                <Link to="/login">
                                    <button type="button" className={styles.white_btn}>
                                        Try It Now!
                                    </button>
                                </Link>}
                            </div>
                        </div>

                        <div className={styles.planitem}>
                            <div className={styles.plan_namebox}>
                                <h3 id={styles.planname}>STANDARD</h3>
                            </div>
                            <div className={styles.pricebox}>
                                <h1 id={styles.price}>2,99€</h1>
                            </div>
                            <div className={styles.featuresbox}>
                                <ul className={styles.features_list}>
                                    <li>
                                        Personalized Guidance
                                    </li>
                                    <li>
                                        24/7 Accessibility
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.btn}>
                                {user && plan=="free-trial" &&
                                <Popup trigger={<button type="button" className={styles.white_btn}>Upgrade</button>} modal nested>
                                    {<div style={{textAlign: "center"}}>
                                        Sorry! This Plan is not available yet!
                                    </div>}
                                </Popup>
                                }
                                {user && plan!=="free-trial" &&
                                <Popup trigger={<button type="button" className={styles.white_btn}>Try It Now!</button>} modal nested>
                                {<div style={{textAlign: "center"}}>
                                    Sorry! This Plan is not available yet!
                                </div>}
                            </Popup>
                                }
                                {!user &&
                                <Popup trigger={<button type="button" className={styles.white_btn}>Try It Now!</button>} modal nested>
                                {<div style={{textAlign: "center"}}>
                                    Sorry! This Plan is not available yet!
                                </div>}
                            </Popup>
                                }
                            </div>
                        </div>

                        <div className={styles.planitem}>
                            <div className={styles.plan_namebox}>
                                <h3 id={styles.planname}>PREMIUM <br></br> (COMING SOON)</h3>
                            </div>
                            <div className={styles.pricebox}>
                                <h1 style={{visibility: "hidden" }}  id={styles.price}>0,00€</h1>
                            </div>
                            <div className={styles.featuresbox}>
                                <ul className={styles.features_list}>
                                    <li>
                                        Personalized Guidance
                                    </li>
                                    <li>
                                        24/7 Accessibility
                                    </li>
                                    <li>
                                        Progress Tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer pagename="Sales"/>
        </>
    );
}

export default Sales;