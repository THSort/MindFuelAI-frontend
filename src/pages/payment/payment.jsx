import React from "react";
import { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";

import styles from "./payment.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Payment() {
	const [error, setError] = useState("");
	const navigate = useNavigate();

    const handleOnClick = async (e) => {
		e.preventDefault();
        const data = {
            "email": localStorage.getItem("email"),
            "plan": "free-trial"
        }
		try {
            console.log("sending:" , data);
			const url = "https://mindfuelai-backend.onrender.com/api/subscriptions";
			const { data: res } = await axios.post(url, data);
            // localStorage.setItem("plan" , res.userPlan);
			navigate("/dashboard");
			console.log(res.userPlan);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return (
        <div className={styles.payment_wrapper}>
            <div className={styles.container}>
                <MDBContainer fluid className="py-4" style={{ backgroundColor: "#c188fa", border: "0px solid red"}}>
                    <MDBRow className="d-flex justify-content-center" >
                        <MDBCol md="19" lg="20" xl="15">
                            <MDBCard>
                                <MDBCardBody style={{ backgroundColor: "#FFC09A", borderBottom: "1px solid black" }}>
                                    <MDBCardTitle className="d-flex justify-content-between mb-0">
                                        <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-muted mb-0">Free-Trial</p>
                                        <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="mb-0">0.00 €</p>
                                    </MDBCardTitle>
                                </MDBCardBody>
                                <div className="rounded-bottom" style={{ backgroundColor: "#FFC09A" }}>
                                    <MDBCardBody>
                                        {" "}
                                        <p className="mb-4" style={{ textAlign: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>*Your Free-Trial will end in 7-days. MindFuelAI will NOT automatically charge you for a Standard Plan</p>
                                        <MDBInput

                                            label="Card Number"
                                            id="form1"
                                            type="text"
                                            placeholder="1234 5678 1234 5678"
                                            wrapperClass="mb-3"
                                            required
                                        />
                                        <MDBRow className="mb-3">
                                            <MDBCol size="6">
                                                <MDBInput
                                                    label="Expire"
                                                    id="form2"
                                                    type="password"
                                                    placeholder="MM/YYYY"
                                                    wrapperClass="mb-3"
                                                    required="true"
                                                />
                                            </MDBCol>
                                            <MDBCol size="6">
                                                <MDBInput
                                                    label="CVV"
                                                    id="form4"
                                                    type="password"
                                                    placeholder="CVV"
                                                    wrapperClass="mb-3"
                                                    required
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <div className={styles.tempwrapper}>
                                            <a onClick={handleOnClick}>
                                                <div className={styles.order_btn}>
                                                    Start Free-Trial!
                                                </div>
                                            </a>
                                        </div>
                                    </MDBCardBody>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}