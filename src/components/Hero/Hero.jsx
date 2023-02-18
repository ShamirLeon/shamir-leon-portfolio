import { HeroSection } from '../../data/data.json';
import HeroImage from '../../assets/Images/Hero-Image-2.png';

const Hero = params => {
	return (
		<section
			className='flex h-[100vh] flex-col items-center justify-center px-6'
			id='Hero'
		>
			<h1 className='text-center text-xl font-bold text-Light-Green'>
				{HeroSection.greeting}
			</h1>
			<h2 className='mt-2 mb-7 text-center text-[40px] font-bold leading-10'>
				{HeroSection.title}
			</h2>
			<picture>
				<img src={HeroImage} alt='Shamir León' className='w-[320px]' />
			</picture>
			<div className='mt-12 h-3 w-[300px] rounded-[50%] bg-Black blur-[25px]'></div>
		</section>
	);
};
export default Hero;
