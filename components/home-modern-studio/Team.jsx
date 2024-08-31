import React from "react";
// import data from "@/data/team-t";
function Team() {
	let data = [
		{
			img: "/assets/imgs/team/5.jpg",
			name: "ጌትነት በቀለ",
			subName: "ዋና ሥራ አስፈፃሚ",
		},
		{
			img: "/assets/imgs/team/t2.jpg",
			name: "Petros Alemayehu",
			subName: "ዋና የፋይናንስ ኦፊሰር",
		},
		{
			img: "/assets/imgs/team/t3.jpg",
			name: "ሳሙኤል ተስፋዬ",
			subName: "የግብይት ዳይሬክተር",
		},
		{
			img: "/assets/imgs/team/t4.jpg",
			name: "ሳባ ታደሰ",
			subName: "ኦፕሬሽንስ አስተዳዳሪ",
		},
		{
			img: "/assets/imgs/team/t2.jpg",
			name: "ገነት ሀይሉ",
			subName: "የሰው ሀብት ሥራ አስኪያጅ",
		},
		{
			img: "/assets/imgs/team/t3.jpg",
			name: "አህመድ ካሊድ",
			subName: "የሰው ሀብት ሥራ አስኪያጅ",
		},
	];

	return (
		<section className="team-crev2 section-padding pb-90">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">የቡድን አባሎቶቻችን</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text secondary-color">
									የፋይናንስ ባለሙያዎቻችንን <span className="fw-200">ያግኙ.</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/page-team"
								className="butn butn-sm secondary-color butn-bord radius-30">
								<span>ከእኛ ጋር ይቀላቀሉ</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="row md-marg">
					{data.map((item, i) => (
						<div key={i} className="col-lg-3 col-md-6">
							<div className="item mb-50">
								<div className="bg-blur">
									<div className="img">
										<img src={item.img} alt="" />
										<div className="social">
											<div className="links">
												<a href="#0">
													<i className="fab fa-facebook-f"></i>
												</a>
												<a href="#0">
													<i className="fab fa-behance"></i>
												</a>
												<a href="#0">
													<i className="fab fa-instagram"></i>
												</a>
											</div>
										</div>
									</div>
									<div className="circle-blur">
										<img src="/assets/imgs/patterns/blur1.png" alt="" />
									</div>
								</div>
								<div className="cont pt-30">
									<div className="info">
										<h6 className="secondary-color">{item.name}</h6>
										<span className="fz-14 p-color mt-10 ">{item.subName}</span>
									</div>
								</div>
							</div>
						</div>
					))}

					<div className="col-lg-3 col-md-6">
						<div className="item-bord d-flex align-items-center justify-content-center mb-50 secondary-color">
							<div>
								<h5>
									የእኛ <br /> አባል ይሁኑ
								</h5>
								<a href="#0" className="mt-30">
									<span className="ti-arrow-top-right fz-30"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="circle-blur">
				<img src="/assets/imgs/patterns/blur1.png" alt="" />
			</div>
		</section>
	);
}

export default Team;
