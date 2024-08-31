"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header() {
	useLayoutEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
		tl.fromTo(
			".header .container",
			{ opacity: 0, translateY: 40 },
			{ opacity: 1, translateY: 0 },
			"-=0"
		);

		return () => tl.kill();
	}, []);
	useEffect(() => {
		loadBackgroudImages();
	}, []);
	return (
		<div
			className="header header-personal valign bg-img"
			data-background="/assets/imgs/header/full/p113.png"
			data-overlay-dark="1">
			<div className="container ontop">
				<div className="row">
					<div className="col-lg-7">
						<div className="caption">
							<h6 className="mb-15">
								<span className="icon-img-30 mr-10">
									<img src="/assets/imgs/header/lamp.png" alt="" />
								</span>{" "}
								በብራይት
							</h6>

							<h1 className="fw-700 mb-10">
								የወደፊት {""}
								<span className="main-color3">የፋይናንሺያል</span>
							</h1>
							<h3>ጊዜዎን ብሩህ ያድርጉ</h3>
							<div className="row">
								<div className="col-lg-9">
									<div className="text mt-30">
										<p>
											ብሩህ ሳኮን ይቀላቀሉ - ህልሞችዎ ዕድል የሚያገኙበት። ለስኬትዎ የተሰጠ የታመኑ የገንዘብ
											መፍትሄዎችን እና ማህበረሰብን ያግኙ.
										</p>
									</div>
									<div className="d-flex align-items-center mt-60">
										<a
											href="/page-contact"
											className="butn butn-md butn-bord radius-30 secondary-color">
											<span className="text">ዛሬ ይጀምሩ</span>
										</a>
										<div className="icon-img-60 ml-20">
											<img
												src="/assets/imgs/icon-img/arrow-down-big.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="info d-flex align-items-center justify-content-end mt-100">
					<div className="item">
						<h6 className="sub-title mb-10">ኢሜይል :</h6>
						<span className="p-color">brightsacco.Info@gmail.com</span>
					</div>
					<div className="item">
						<h6 className="sub-title mb-10">ስልክ :</h6>
						<span className="p-color">+251 (913) 243 452</span>
					</div>
					<div className="item">
						<h6 className="sub-title mb-10">አድራሻ :</h6>
						<span className="p-color">ገርጂ መብራት ሃይል በርሚንግሃም #301</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
