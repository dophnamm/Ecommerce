import React from "react";
import "./Footer.scss";
import { BsShop, BsArrowReturnLeft } from "react-icons/all";

function Footer() {
	return (
		<div id="footer">
			<div className="container">
				<div className="footer__container">
					<div className="footer__header">
						<BsShop className="footer__logo" />
						<h2 className="footer__logo-name">LOGO</h2>
					</div>

					<div className="footer__input">
						<input type="text" className="footer__input-input" />
						<BsArrowReturnLeft />
					</div>

					<div className="footer__main-link">
						<div className="footer__item">
							<div className="item-title">Service & Support</div>
							<ul>
								<li>dophnamm@gmail.com</li>
								<li>+84 0909 1209 00</li>
								<li>Locations</li>
							</ul>
						</div>

						<div className="footer__item">
							<div className="item-title">Info</div>
							<ul>
								<li>Consignment Terms</li>
								<li>Connect with Us</li>
								<li>Delivery and Returns</li>
								<li>FAQs</li>
							</ul>
						</div>

						<div className="footer__item">
							<div className="item-title">Follow Us</div>
							<ul>
								<li>Facebook</li>
								<li>Instagram</li>
								<li>Youtube</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
