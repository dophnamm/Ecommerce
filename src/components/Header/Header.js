import React from "react";
import "./Header.scss";
import { BsShop, RiSearchLine, RiHeart2Line, BiUser } from "react-icons/all";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Contexts/StateProvider";

function Header() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div id="header">
			<div className="container">
				<div className="header__container">
					<Link to="/" style={{ color: "black", textDecoration: "none" }}>
						<div className="header__logo">
							<BsShop className="header__logo-shopIcon" />
							<h2 className="header__logo-name">LOGO</h2>
						</div>
					</Link>

					<div className="header__search">
						<RiSearchLine className="header__search-searchIcon" />
						<form>
							<input type="text" placeholder="Search..." className="header__search-input" />
						</form>
					</div>

					<div className="header__navigation">
						<Link to="/login" style={{ color: "black", textDecoration: "none" }}>
							<div className="nav__item">
								<BiUser className="nav__item-userIcon" />
							</div>
						</Link>

						<div className="nav__item">
							<RiHeart2Line className="nav__item-heartIcon" />
						</div>

						<Link to="/checkout-product" style={{ color: "black", textDecoration: "none" }}>
							<div className="nav__item">
								<LocalMallTwoToneIcon className="nav__item-bagIcon" />
								<span>{basket.length}</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
