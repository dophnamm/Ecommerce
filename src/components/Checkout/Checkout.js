import React from "react";
import Header from "../Header/Header";
import "./Checkout.scss";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import { useStateValue } from "../../Contexts/StateProvider";
import { BsArrow90DegLeft } from "react-icons/all";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<>
			<Header />
			<div id="checkout">
				<div className="container">
					<div className="checkout-title">
						<h1>Your Shopping Carts</h1>
					</div>
					<div className="checkout__container">
						<div className="product__main">
							{basket.length === 0 ? (
								<div className="not-found">
									<h2>There are currently no products</h2>
								</div>
							) : (
								<>
									{basket &&
										basket.length > 0 &&
										basket.map((item) => {
											const { id, image, price, title } = item;

											return (
												<CheckoutProduct
													key={id}
													id={id}
													title={title}
													price={price}
													image={image}
												/>
											);
										})}
								</>
							)}
						</div>
						<SubTotal />
					</div>

					<Link to="/">
						<div className="back-home">
							<p>
								Back to home
								<BsArrow90DegLeft />
							</p>
						</div>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Checkout;
