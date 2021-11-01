import React, { useState, useEffect } from "react";
import "./Home.scss";
import Products from "../Product/Products";
import Banner from "./Banner/Banner";
import Header from "../Header/Header";
import { fetchDataProduct } from "../../APIs/DataProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

function Home() {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchDataProduct();
				if (response && response.data) {
					setData(response.data);
					setLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const showLoading = () => {
		if (isLoading) {
			return (
				<div style={{ textAlign: "center" }}>
					<h2>Loading ...</h2>
				</div>
			);
		}
	};

	return (
		<>
			<Header />
			<div className="home">
				<div className="container">
					<div className="home__container">
						<Banner />
						<Products data={data} showLoading={showLoading} />
					</div>
				</div>
			</div>
			<Footer />
			<ToastContainer
				position="top-right"
				style={{ top: "80px" }}
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default Home;
