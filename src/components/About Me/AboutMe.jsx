import { AboutMeSection } from '../../data/data.json';
import WavesTop from '../../assets/Icons/WavesTopMobile';
import WavesBot from '../../assets/Icons/WavesBotMobile';

import Skills from '../Skills/Skills';

const AboutMe = params => {
	return (
		<div className='relative z-10 pb-[630px] '>
			<WavesTop />
			<section id='AboutMe' className='bg-Dark-Blue pt-8 pb-20'>
				<div className='flex flex-col gap-7 px-6 py-12 text-justify text-lg leading-8 text-White'>
					<h2 className='py-4 text-center text-3xl font-bold tracking-widest text-Light-Green'>
						Sobre mí
					</h2>

					<p>
						{AboutMeSection.firstParagraph}{' '}
						<b className='underline decoration-Light-Green decoration-wavy underline-offset-4'>
							React y JavaScript
						</b>
					</p>
					<p>
						{AboutMeSection.secondParagraph}{' '}
						<a
							href='https://frontendmentor.io/profile/shamirleon'
							target='_blank'
							rel='noreferrer'
						>
							<b className='underline decoration-Light-Green decoration-wavy  underline-offset-4'>
								FrontEnd Mentor
							</b>
							{AboutMeSection.thirdParagraph}
						</a>
					</p>
					<a href='#' className='text-center font-bold'>
						Descarga mi CV
					</a>
				</div>
				<Skills />
			</section>
			<WavesBot />
		</div>
	);
};
export default AboutMe;
