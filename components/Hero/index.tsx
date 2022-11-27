import Image from "next/image";
import { FunctionComponent, ReactNode, useId } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface HeroCarouselItemProps {
	alt: string;
	src: string;
	title: ReactNode;
	description: ReactNode;
}

export interface HeroProps {
	carouselItems: HeroCarouselItemProps[];
}

const Hero: FunctionComponent<HeroProps> = ({ carouselItems }) => {
	console.log(carouselItems);
	const id = useId();
	return (
		<section className="w-full min-h-screen">
			<Carousel
				animationHandler="fade"
				autoPlay
				transitionTime={0}
				autoFocus
				infiniteLoop
				interval={6000}
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				swipeable={false}>
				{carouselItems.map((item, index) => {
					return (
						<div
							className="w-full min-h-screen top-0 left-0"
							key={id}>
							<Image
								priority
								src={item.src}
								alt={item.alt}
								layout="fill"
								objectFit="cover"
								className="object-left animate-zoomOut"
							/>
							<div className="min-h-screen flex items-center justify-center relative animate-translateUpwards">
								<div className="text-white max-w-2xl ">
									<h1 className="uppercase text-4xl mb-4">
										{item.title}
									</h1>
									<p className="text-lg">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</section>
	);
};

export default Hero;
