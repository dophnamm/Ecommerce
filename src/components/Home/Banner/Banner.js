import React, { useState, useEffect } from "react";
import "./Banner.scss";
import data from "../../../APIs/data";

function Banner() {
	const [dataBanners, setDataBanners] = useState([]);

	useEffect(() => {
		setDataBanners(data.banner);
	}, []);

	return (
		<div id="banner">
			<div className="container">
				<div className="banner__container">
					<div className="banner__title">
						<p>NEW COLLECTION</p>
						<h2 className="sub-title">WINNTER 2021</h2>
					</div>

					<div className="banner__hero">
						<button className="btn btn-prev">PREV</button>

						<div className="hero__container-image">
							{dataBanners &&
								dataBanners.length > 0 &&
								dataBanners.map((banner) => {
									const { id, image } = banner;
									return (
										<div key={id} className="hero-image">
											<img src={image} alt="banner" />
										</div>
									);
								})}
						</div>

						<button className="btn btn-next">NEXT</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
