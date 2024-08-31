"use client";
import React, { useEffect } from "react";

function Portfolio() {
	function Playing() {
		gsap.registerPlugin(ScrollTrigger);

		const cards = document.querySelectorAll(".cards .card-item");
		let stickDistance = 0;

		const firstCardST = ScrollTrigger.create({
			trigger: cards[0],
			start: "center center",
		});

		const lastCardST = ScrollTrigger.create({
			trigger: cards[cards.length - 1],
			start: "bottom bottom",
		});

		cards.forEach((card, index) => {
			const scale = 1 - (cards.length - index) * 0.025;
			const scaleDown = gsap.to(card, {
				scale: scale,
				transformOrigin: "50% " + (lastCardST.start + stickDistance),
			});

			ScrollTrigger.create({
				trigger: card,
				start: "center center",
				end: () => lastCardST.start + stickDistance,
				pin: true,
				pinSpacing: false,
				ease: "none",
				animation: scaleDown,
				toggleActions: "restart none none reverse",
			});
		});
	}
	useEffect(() => {
		Playing();

		// Clean up function
		return () => {
			// Dispose GSAP ScrollTrigger instances
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};
	}, []);
	return (
		<section className="work-card section-paddings pb-0">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">ተመራጭ የሚያደርጉን</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text secondary-color">
									ዋና ዋና <span className="fw-200">ተግባራቶቻችን</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/portfolio-grid"
								className="butn butn-sm butn-bord radius-30 secondary-color">
								<span>ሁሉንም ይመልከቱ</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="cards">
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												ወለድ
											</a>
											<a href="/portfolio-grid" className="tag">
												ቁጠባ
											</a>
										</div>
										<h4>ወለድ የማይታሰብበት ቁጠባ</h4>
									</div>
									<div>
										<p>
											ወለድ አልባ ቁጠባ ማለት ከእምነት ጋር በተያያዘ ወይም በሌላ ምክንያት (ገንዘባቸውን
											በአስተማማኝ ቦታ እንዲቀመጥላቸው በሚፈልጉ ወይም በሌላ ሁኔታ) ደንበኞች ያለምንም የወለድ
											ክፍያ በፋይናንስ ተቋማት የሚያስቀምጡት ወይም የሚቆጥቡት የቁጠባ ዓይነት ነው ፡፡
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/3.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የንግድ
											</a>
											<a href="/portfolio-grid" className="tag">
												ብድር
											</a>
										</div>
										<h4>የንግድ ብድር</h4>
									</div>
									<div>
										<p>
											 ለከተማ ግብርና ስራ የሚሰጥ ብድር  ለአነስተኛ ንግድ ስራ የሚሰጥ ብድር፣ 
											ለአገልግሎት ስራ የሚሰጥ ብድር፣
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/3.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												 የመኖሪያ ቤት
											</a>
											<a href="/portfolio-grid" className="tag">
												 የኮንደሚኒየም ግንባታ ማስጨረሻ
											</a>
										</div>
										<h4>የቤት ግዥ፣ መስሪያ እና ማደሻ ብድር</h4>
									</div>
									<div>
										<p>
											 የኮንደሚኒየም ግንባታ ማስጨረሻ  የ መኪና ግዥ የሚሰጥ ብድር  የቤት መኪና  የንግድ
											መኪና  የታክሲ አገልግሎት
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/5.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												ከመድህን
											</a>
											<a href="/portfolio-grid" className="tag">
												ኢንሹራንስ
											</a>
										</div>
										<h4> ከመድህን ወይም ኢንሹራንስ አግልግሎቶቹ የሚገኝ ጥቅም</h4>
									</div>
									<div>
										<p>
											• የመድህን ወይም ኢንሹራንስ አገልግሎት ተጠቃሚ የሆነ ቆጣቢ አባል በሞት በሚለይበት ወቅት
											የሞት እና አሟሟት ማረጋገጫ ማስረጃ እንደቀረበ መድህን የተገባለት ቁጠባ እጥፍ እና የቀብር
											ስነ ስርዓት ማስፈጸሚያ ማህበሩ የቀብር ማስፈፀሚያ መኪና ገዝቶ አገልግሎት ይሰጣል:: ይህ
											ካልሆነ ብር 2000.00 የአባሉ የመኖሪያና የቀብር መፈጸሚያ እና ማስተዛዘኛ ብር
											3000.00 በድምሩ 5000.00 በአባሉ መኖሪያ ቤት በመገኜት ለህጋዊ ወራሾች በህብረት ስራ
											ማህበሩ ሊቀመንበር/ሥራ አስኪያጅ/ አማካይነት ይሰጣል፡፡
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												View Details <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/4.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የልጆች
											</a>
											<a href="/portfolio-grid" className="tag">
												ቁጠባ
											</a>
										</div>
										<h4>የህፃናት ቁጠባ</h4>
									</div>
									<div>
										<p>
											 እድሜያቸው ከ18 አመት በታች የሆኑ ህፃናት በማህበራችን ቆጣቢ መሆን ይችላሉ  ህፃናት
											ማህበራችን ላይ ቁጠባ ሲጀምሩ መመዝገቢያ አያስፈልጋቸውም  የህፃናት ቁጠባ ህብረት ስራ እና
											የቁጠባ ባህልን ለህፃናት ማስለመድ በመሆኑ የቁጠባ መጠኑ ከ100.00 ይጀምራል፡፡
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/5.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
