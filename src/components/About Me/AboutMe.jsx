import { AboutMeSection } from '../../data/data.json';
import WavesTop from '../../assets/Icons/WavesTopMobile';
import WavesBot from '../../assets/Icons/WavesBotMobile';

const AboutMe = params => {
	return (
		<>
			<WavesTop />
			<section id='AboutMe' className='bg-Dark-Blue pt-8 pb-20'>
				<div className='flex flex-col gap-7 px-6 py-12 text-justify text-lg leading-8 text-White'>
					<h2 className='py-4 text-center text-3xl font-bold tracking-widest text-Accent-Pink'>
						Sobre mí
					</h2>

					<p>
						{AboutMeSection.firstParagraph}{' '}
						<b className='underline decoration-Accent-Pink decoration-wavy underline-offset-4'>
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
							<b className='underline decoration-Accent-Pink decoration-wavy  underline-offset-4'>
								FrontEnd Mentor
							</b>
							{AboutMeSection.thirdParagraph}
						</a>
					</p>
					<a href='#' className='text-center font-bold'>
						Descarga mi CV
					</a>
				</div>
			</section>
			<WavesBot />
		</>
	);
};
export default AboutMe;