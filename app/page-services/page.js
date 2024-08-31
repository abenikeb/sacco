import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Clients from "@/components/common/Clients";
import Services2 from "@/components/home-digital-agency/Services";
import Services from "@/components/home-personal/Services";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-digital-agency/Testimonials";
import Blog from "@/components/home-digital-agency/Blog";
import Header from "@/components/page-services/Header";
import Numbers from "@/components/page-services/Numbers";

export const metadata = {
	title: "Bright Sacco",
	icons: {
		icon: "/assets/imgs/favicon.ico",
		shortcut: "/assets/imgs/favicon.ico",
		other: generateStylesheetObject([
			"/assets/css/plugins.css",
			"/assets/css/style.css",
			"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
			"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
		]),
	},
};

export default function Home() {
	return (
		<body>
			{/* <LoadingScreen /> */}
			<Cursor />
			<ProgressScroll />
			<Lines />
			<Navbar />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="main-bg o-hidden">
						<Header />
						{/* <Services2 /> */}
						<div className="container service-conatiner">
							<div className="sec-head mb-80">
								<div className="row">
									<div className="col-lg-4">
										<h6 className="title-bord mb-30 secondary-color">
											ተግባራቶቻችን
										</h6>
									</div>
									<div className="col-lg-8">
										<div className="text secondary-color">
											<h4>
												 ከአባላት የመመዝገቢያ ክፍያ 1000.00 ፣ 1 ዕጣ 100.00 ብር የሆነ ለአዲስ
												አባል ዝቅተኛ 15 ዕጣ መሸጥ እና አባት በየወሩ ቢያንስ አንድ ዕጣ እንዲገዙ ማድረግ 
												፣ የተለያዩ ቁጠባ ፣አረቦን፣የአገልግሎት ገቢ ፣ ልዩ ልዩ ገቢዎችን እና በቸክ
												የሚንቀሳቀስ ተንቀሳቃሽ ሂሳብ መሰብሰብ ፤3.5፡1 የቁጠባ እና ዕጣ ምጥጥን መስራት፣
												ለአባላት የተለያዩ አይነቶች ብድር መስጠት እና ከነወለዱ መሰብሰብ፣ ስልጠና መስጠት 
												የሸሪዓ ህግን መሰረት ያደረገ ወለድ አልባ የፋይናንስ አገልግሎት መስጠት
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Services />
						<Intro2 />
						{/* <Numbers /> */}
						{/* <Testimonials /> */}
						{/* <Clients />
						<Blog /> */}
						{/* <Marq2 /> */}
					</main>
					<Footer />
				</div>
			</div>

			<Script
				src="/assets/js/ScrollTrigger.min.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="/assets/js/ScrollSmoother.min.js"
				strategy="beforeInteractive"
			/>

			<Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/TweenMax.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/charming.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/countdown.js"></Script>

			<Script
				strategy="beforeInteractive"
				src="/assets/js/gsap.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/splitting.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/isotope.pkgd.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>

			{/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

			<Script src="/assets/js/scripts.js"></Script>
		</body>
	);
}
