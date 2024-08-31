"use client";
import React from "react";

function FAQS() {
	function openAccordion(event) {
		document.querySelectorAll(".accordion-info").forEach((element) => {
			element.classList.remove("active");
			element.style.maxHeight = 0;
			element.parentElement.classList.remove("active");
		});
		event.currentTarget.parentElement.classList.add("active");
		event.currentTarget.nextElementSibling.style.maxHeight = "300px";
		event.currentTarget.nextElementSibling.classList.add("active");
	}
	return (
		<section className="page-faqs section-padding pb-0 position-re">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div>
							<div className="sec-head mb-50">
								<h6 className="sub-title main-color mb-15">
									ወደ ተደጋጋሚ ጥያቄዎች ክፍላችን እንኳን በደህና መጡ!
								</h6>
								<h3 className="secondary-color">
									ከደንበኞች የሚነሱ የተለመዱ ጥያቄዎች
									<br /> መልሶችን ያገኛሉ.
								</h3>
							</div>
							<div className="accordion bord secondary-color">
								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6>የአባልነት መስፈርት ሙሉ እና ዕጩ አባል ለመሆን ምን ያስፈልጋል </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="">
											 እድሜው ከ18 ዓመት እና ከዚያ በላይ ሆኖ በአዲስ አበባ የሚኖር፣ መተዳደሪያ ደንቡን፣
											ውስጠ ደንቡን፣ ኅብረት ሥራ ማህበሩ ያወጣቸው የተለያዩ መመሪያዎች፣ የጠቅላላ ጉባኤ
											ውሳኔዎችን የተቀበለና ግዴታውን ለመወጣት ፈቃደኛ የሆነ፣
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>ስለብድር አሰጣጥ ምን ያስፈልጋል </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="">
											 ሰው ለመርዳት ፅኑ ፍላጎት ያለው ግለሰብም ሆነ ድርጅት  የፍላጎት ቁጠባ ለመቆጠብ
											ፈቃደኛ የሆነ
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>ስለብድር አሰጣጥ ምን ያስፈልጋል </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="">
											 ሰው ለመርዳት ፅኑ ፍላጎት ያለው ግለሰብም ሆነ ድርጅት  የፍላጎት ቁጠባ ለመቆጠብ
											ፈቃደኛ የሆነ
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>ተባባሪ አባል ለመሆን ለመሆን ምን ያስፈልጋል </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="">
											 ሰው ለመርዳት ፅኑ ፍላጎት ያለው ግለሰብም ሆነ ድርጅት  የፍላጎት ቁጠባ ለመቆጠብ
											ፈቃደኛ የሆነ
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="img1">
				<img src="/assets/imgs/intro/03.jpg" alt="" />
			</div>
			<div className="img2">
				<img src="/assets/imgs/arw0.png" alt="" />
			</div>
			<div className="img3">
				<img src="/assets/imgs/intro/04.jpg" alt="" />
			</div>
		</section>
	);
}

export default FAQS;
