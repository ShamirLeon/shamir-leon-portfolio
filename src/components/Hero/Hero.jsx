import { HeroSection } from '../../data/data.json';
import HeroImage from '../../assets/Images/Shanm.jpeg';

const Hero = params => {
	return (
		<section
			className='flex h-[100vh] flex-col items-center justify-center px-6 lg:flex-row-reverse lg:gap-20'
			id='Hero'
		>
			<div className='text-center lg:w-[450px] lg:text-left'>
				<h1 className='text-xl font-bold text-Light-Green lg:text-3xl'>
					{HeroSection.greeting}
				</h1>
				<h2 className='mt-2 mb-7 text-4xl font-bold leading-10 lg:text-6xl'>
					{HeroSection.title}
				</h2>
				<div className='hidden h-2 w-2/3 bg-Light-Green lg:block'></div>
			</div>
			<picture>
				<img
					src={HeroImage}
					alt='Shamir León'
					className='m-auto w-[300px] rounded-md md:w-[420px]'
				/>
				<div className='mt-12 h-3 w-[300px] rounded-[50%] bg-Black blur-[25px] md:w-[420px]'></div>
			</picture>
		</section>
	);
};
export default Hero;
