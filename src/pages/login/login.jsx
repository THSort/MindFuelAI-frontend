import { useState } from "react";
import axios from "axios";
import styles from "./login.module.css";
import {
	Link,
	Routes,
	Route,
	useNavigate,
  } from 'react-router-dom';
import Footer from "../../footer";
import Navbar from "../../navbar";
import LoadingSpinner from "../loadingSpinner/loadingspinner";

const Login = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		try {
			const url = "https://mindfuelai-backend.onrender.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("email", res.userEmail)
			if(res.userPlan != "None")
			{
				localStorage.setItem("plan" , res.userPlan);
				window.location = "/dashboard";
			}
			else{
				window.location = "/sales";
			}
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
		setIsLoading(false);
	};

	return (
		<>
		<Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{isLoading && <LoadingSpinner/>}
						{!isLoading && <button type="submit" className={styles.green_btn}>
							Log In
						</button>}
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		<Footer pagename="Login"/>
		</>
	);
};

export default Login;