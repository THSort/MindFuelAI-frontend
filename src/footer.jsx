import React from 'react';
import styles from "./footer.module.css";
import back_arrow from "./arrow-left.svg";
import email from "./envelope.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import {
	Link,
	Routes,
	Route,
	useNavigate,
  } from 'react-router-dom';

export default function Footer(props) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        {props.pagename !== "Home" &&
        <div className={styles.back_btn_wrapper}>
          <div className={styles.back_btn_box} onClick={handleBackClick}>
            <div className={styles.backarrow}>
              <img className={styles.arrowimg} src={back_arrow}></img>
            </div>
            {/* <p id={styles.ptext}>Go Back</p> */}
            <div className={styles.backtextwrapper}>
              <div className={styles.backtext}>
                Go Back
              </div>
            </div>
          </div>
        </div>
        }
        <div className={styles.social_container}>
          <div className={styles.social_wrapper}>
            <a href="mailto:ai.mindfuel@gmail.com">
              <img className={styles.smicon} src={email}></img>
            </a>
            <a href="https://www.instagram.com/mindfuel.ai/">
              <img className={styles.smicon} src={instagram}></img>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092211055479">
              <img className={styles.smicon} src={facebook}></img>
            </a>
          </div>
        </div>
        <div className={styles.threebtns_wrapper}>
          <a href="/dataprotection" className={styles.externalbtn}>
            Data Protection
          </a>
          <a href="/disclaimer" className={styles.externalbtn}>
            Disclaimer
          </a>
          <a href="/aboutus" className={styles.externalbtn}>
            About Us
          </a>
        </div>
        <div className={styles.copyright}>
          Copyright © 2023 MindFuel . All rights reserved.
        </div>
      </div>
    </div>
  );
}