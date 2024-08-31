import React from "react";

function Intro() {
	return (
		<section className="page-intro section-padding pb-0">
			<div className="container">
				<div className="row md-marg">
					<div className="col-lg-6">
						<div className="img md-mb80">
							<div className="row">
								<div className="col-6">
									<img src="/assets/imgs/intro/i1.jpg" alt="" />
									<div className="img-icon">
										<img src="/assets/imgs/arw0.png" alt="" />
									</div>
								</div>
								<div className="col-6 mt-40">
									<img src="/assets/imgs/intro/i2.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 valign secondary-color">
						<div className="cont">
							<h3 className="mb-30">
								ብራይት ኃ/የተወሰነ የገንዘብ ቁጠባ እና ብድር{" "}
								<span className="fw-200">
									መሰረታዊ ኅብረት ስራ ማኅበር በአባላት በሙሉ ፍላጎት
								</span>{" "}
								እና ፈቃደኝነት የኅብረት ስራ ማኅበሩን ለማ ራጀት በወጣው አዋጅ ቁጥር 985/2009 መሰረት
								የተመሰረተ እና ለአባላት ፣{" "}
								<span className="fw-200">
									{" "}
									የቁጠባ፣የብድር፣አነስተኛ ኢንሹራንስ አገለግሎት እንዲሁም የተለያዩ ስልጠናዎች ለአባላት እዲሰጥ
									ታስቦ እየተቋቋመ ያለ ማኅበረሰብ አቀፍ ኅብረት ስራ ማኅበር ነው::{" "}
								</span>
							</h3>
							<p>
								ወደፊት ማሰብ የቁጠባ እና የብድር ትብብር እንደመሆናችን መጠን የፋይናንሺያል ግቦችዎን በልበ ሙሉነት
								እና በቀላሉ እንዲያሳኩ የተበጁ ምርቶችን እና አገልግሎቶችን እናቀርባለን። ብሩህ የወደፊት የፋይናንስ
								ተሞክሮ ለማግኘት አብረውን ይቀላቀሉን።
							</p>
							<a href="/page-services" className="underline main-color mt-40">
								<span className="text">
									የእኛ አገልግሎቶች <i className="ti-arrow-top-right"></i>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
