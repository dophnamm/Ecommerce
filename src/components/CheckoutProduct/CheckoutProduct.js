import React from "react";
import { FaTimes } from "react-icons/all";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../Contexts/StateProvider";

function CheckoutProduct({ id, title, price, image }) {
	const [{ basket }, dispatch] = useStateValue();

	const handleDelete = () => {
		dispatch({
			type: "DELETE_FROM_CHECKOUT",
			id: id,
		});
	};
	return (
		<div className="checkout__product">
			<div className="product__image">
				<img src={image} alt="product_img" />
			</div>

			<div className="product__info">
				<div className="product__info-up">
					<div className="product__info-title">{title}</div>
					<div className="product__info-price">
						<small>$</small>
						<p>{price}</p>
					</div>
				</div>
				<button className="btn-remove" onClick={handleDelete}>
					Remove Item
					<FaTimes className="remove-icon" />
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
