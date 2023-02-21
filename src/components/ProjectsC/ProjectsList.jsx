import { ProjectsSection } from '../../data/data.json';
import Dots from '../../assets/Icons/dots';

import TodoImg from '../../assets/Images/todo-app.jpg';
import BankImg from '../../assets/Images/easy-bank.jpg';
import BookmarkImg from '../../assets/Images/bookmark.jpg';

const images = [TodoImg, BookmarkImg, BankImg];

const ProjectsList = () => {
	console.log(ProjectsSection[0].technologies.length);
	return (
		<div className='mx-auto flex flex-col gap-20 lg:mx-0 lg:flex-row lg:flex-wrap lg:justify-between'>
			{ProjectsSection.map(card => (
				<div
					key={card.id}
					className='max-w-[330px] rounded-xl py-[10px] px-3 shadow-xl lg:max-w-[300px]'
				>
					<picture>
						<img
							src={images[card.id]}
							alt={card.alternative}
							className='mb-4 rounded-xl lg:mx-auto'
						/>
					</picture>
					<h2 className='text-center font-Roboto text-xl font-bold uppercase italic text-Black lg:text-left lg:text-lg '>
						{card.title}
					</h2>
					<div className='flex flex-col justify-center gap-5 overflow-hidden py-5 lg:py-2'>
						<div className='flex justify-center gap-3 lg:flex-wrap'>
							{card.technologies.map((e, index) => (
								<span
									key={index}
									className='rounded-2xl bg-Light-Accent-Blue py-1 px-4 text-sm italic text-Dark-Blue lg:text-xs'
								>
									{e}
								</span>
							))}
						</div>

						<Dots className='relative z-[11] mx-auto w-full scale-125' />

						<div className='flex justify-center gap-3 lg:justify-start'>
							<a
								href={card.repository}
								className='after:content-[" "] relative font-Roboto text-base uppercase italic after:absolute after:bottom-0 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green lg:text-sm'
								target='_blank'
								rel='noreferrer'
							>
								Repositorio
							</a>
							<a
								href={card.live}
								className='after:content-[" "] relative font-Roboto text-base uppercase italic after:absolute after:-bottom-0 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green lg:text-sm'
								target='_blank'
								rel='noreferrer'
							>
								Live demo
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default ProjectsList;
