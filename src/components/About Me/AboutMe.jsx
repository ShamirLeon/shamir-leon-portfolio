import { AboutMeSection } from '../../data/data.json';
import WavesTopDesktop from '../../assets/Icons/WavesTopDesktop';
import ClipboardIcon from '../../assets/Icons/clipboard.svg';

import Skills from '../Skills/Skills';

const AboutMe = params => {
	return (
		<div className='relative z-10 pb-[630px] lg:pb-6 '>
			<WavesTopDesktop className='-mb-1 rotate-180' />
			<section
				id='AboutMe'
				className='bg-Dark-Blue pt-8 pb-20 lg:flex lg:items-center lg:justify-center  lg:gap-28 lg:py-2 lg:px-32'
			>
				<div className='flex flex-col gap-7 px-6 py-12 text-center md:text-left text-lg leading-8 text-White  lg:w-[620px] lg:gap-3 lg:p-0'>
					<h2 className='py-4 mb-2 text-center text-3xl font-bold tracking-widest text-Light-Green lg:py-2 lg:text-left'>
						Sobre mí
					</h2>

					<p>
						{AboutMeSection.firstParagraph}{' '}
						<b className='underline decoration-Light-Green decoration-wavy underline-offset-4'>
							React.js y Vue.js. 
						</b>
						{' '} en el front-end, así como en la implementación de soluciones robustas en el back-end con 
						<b className='underline decoration-Light-Green decoration-wavy underline-offset-4'>
						{' '}	Laravel. 
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
						</a>
						{AboutMeSection.thirdParagraph}
					</p>
					<div>
						<a
							href={import.meta.env.VITE_CV_URL}
							className='rounded-md bg-White py-1 px-4 mt-8 max-w-[160px] flex items-center gap-2 text-center font-bold text-Dark-Blue lg:text-left m-auto md:m-0'
							target='_blank'
							rel='noreferrer'
						>
							Curriculum
							<img src={ClipboardIcon} className='w-5' />
						</a>
					</div>
				</div>
				<Skills />
			</section>
			<WavesTopDesktop className='' />
		</div>
	);
};
export default AboutMe;
