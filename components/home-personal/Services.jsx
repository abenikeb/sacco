import React from "react";

function Services() {
	return (
		<section className="services-clas">
			<div className="container section-padding bord-bottom-grd pt-0">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">የእኛ መገለጫ የሆኑ</span>
							<h3 className="fw-600 fz-50 secondary-color text-u d-rotate wow">
								<span className="rotate-text">
									ተልዕኳችን እና <span className="fw-200">ርዕያችን</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more secondary-color">
							<a
								href="/page-services"
								className="butn butn-sm butn-bord radius-30 secondary-color">
								<span>ሁሉንም ይመልከቱ</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="item sub-bg md-mb30 fixed-height-card">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/3.png" alt="" />
							</div>
							<h5>ርዕያችን</h5>
							<div className="text mt-40">
								<div className="mb-10">
									<span className="tag">መካከለኛ ገቢ</span>
									<span className="tag">ስራ ፈጣሪ</span>
								</div>
								<p className="truncate-text">
									በ2030 ዓ.ም ሁሉም አባላት መካከለኛ ገቢ ያላቸው እና ስራ ፈጣሪ ሁነው ማየት፡፡
								</p>
							</div>
							<a href="/page-services-details" className="mt-40">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="item sub-bg md-mb30 fixed-height-card">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/4.png" alt="" />
							</div>
							<h5>ተልዕኳችን</h5>
							<div className="text mt-40">
								<div className="mb-10">
									<span className="tag">ዘላቂነት ያለው </span>
									<span className="tag">ሁሉን አቀፍ የፋይናንስ ተቋም መገንባት</span>
								</div>
								<p className="truncate-text">
									በሰለጠነ እና በስነምግባር በታነፀ የሰው ሃይል እና በዘመናዊ ቴክኖሎጂ በመታገዝ ለህብረተሰቡ
									በፋይናንስ አጠቃቀም ተከታታይ ስልጠና በመስጠት ዘላቂነት ያለው ሁሉን አቀፍ የፋይናንስ ተቋም
									በመገንባት ምቹ፣ ተደራሽ እና ቀልጣፋ የፋይናንስ አገልግሎት በመስጠት የአባላትን ፍላጎት ማሟላት
									ነው፡፡
								</p>
							</div>
							<a href="/page-services-details" className="mt-40">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="item sub-bg fixed-height-card">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/5.png" alt="" />
							</div>
							<h5>ዓላማዎቻችን</h5>
							<div className="text mt-40">
								<div className="mb-10">
									<span className="tag">የፋይናንስ አጠቃቀም ማሻሻል</span>
									<span className="tag">የተለያዩ የቁጠባ አገልግሎቶች ማስፋፋት</span>
								</div>
								<p className="truncate-text">
									የፋይናንስ ትምህርትና ስልጠና በመስጠት የፋይናንስ አጠቃቀም ንቃተ ህሊና በማሻሻል አባላትን በስፋት
									ማፍራት፣ የአባላትን ፍላጎት መሰረት ያደረገ የተለያዩ የቁጠባ አገልግሎቶች በማስፋፋት ቁጠባን
									በስፋት ማሰባሰብ፣ የአባላትን እና ደንበኞችን ፍላጎት መሰረት ያደረገ የተለያዩ የብድር
									አገልግሎቶችን በማስፋፋት የብድር አገልግሎትን በብዛት፣ በጥራት እና በተመጣጣኝ ዋጋ ለአባላት
									በማቅረብ የኢንቨስትመንት አቅም ለማሳደግ፣
								</p>
							</div>
							<a href="/page-services-details" className="mt-40">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
