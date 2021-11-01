import React from "react";
import "./SubTotal.scss";
import { useStateValue } from "../../Contexts/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../store/reducer";

function SubTotal() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div id="subtotal">
			<div className="subtotal-title">
				<h3>Total</h3>
				<h4 style={{ fontWeight: "bold" }}>Details</h4>
			</div>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<div className="subtotal-info">
							<div className="total-product">
								<h4>total items</h4>
								<p>{basket.length}</p>
							</div>
							<div className="total-price">
								<h4>total payable</h4>
								<div className="price">
									<small>$</small>
									<p>{value}</p>
								</div>
							</div>
							<button className="btn-payment">Proceed to Checkout</button>
						</div>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType="text"
				thousandSeparator={true}
			/>
		</div>
	);
}

export default SubTotal;
