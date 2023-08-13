import { AboutMeSection } from '../../data/data.json';
import WavesTopDesktop from '../../assets/Icons/WavesTopDesktop';

import Skills from '../Skills/Skills';

const AboutMe = params => {
	return (
		<div className='relative z-10 pb-[630px] lg:pb-6 '>
			<WavesTopDesktop className='-mb-1 rotate-180' />
			<section
				id='AboutMe'
				className='bg-Dark-Blue pt-8 pb-20 lg:flex lg:items-center lg:justify-center  lg:gap-28 lg:py-2 lg:px-32'
			>
				<div className='flex flex-col gap-7 px-6 py-12 text-justify text-lg leading-8 text-White  lg:w-[620px] lg:gap-3 lg:p-0'>
					<h2 className='py-4 text-center text-3xl font-bold tracking-widest text-Light-Green lg:py-2 lg:text-left'>
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
					<a
						href={import.meta.env.VITE_CV_URL}
						className='text-center font-bold lg:text-left'
						target='_blank' rel="noreferrer"
					>
						Descarga mi CV
					</a>
				</div>
				<Skills />
			</section>
			<WavesTopDesktop className='' />
		</div>
	);
};
export default AboutMe;
