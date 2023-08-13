import Dots from '../../assets/Icons/dots';
import { useContext } from 'react';
import DataContext from '../../context/Context';

const ProjectsList = () => {
	const { projects } = useContext(DataContext);

	return (
		<div className='mx-auto flex flex-col gap-8 lg:mx-0 lg:flex-row lg:flex-wrap lg:justify-between'>
			{projects.map(project => (
				<div
					key={project.id}
					className='max-w-[330px] rounded-xl py-[10px] px-3 shadow-xl lg:max-w-[300px]'
				>
					<div
						style={{ backgroundImage: `url('${project.image}')` }}
						className={`mb-4 h-48 rounded-xl bg-cover lg:mx-auto`}
					></div>
					<h2 className='text-center font-Roboto text-xl font-bold uppercase italic text-Black lg:text-left lg:text-lg '>
						{project.name}
					</h2>
					<div className='flex flex-col justify-center gap-5 overflow-hidden py-5 lg:py-2'>
						<div className='flex justify-start gap-3 lg:flex-wrap'>
							{project.technologies.map((tecnology, index) => (
								<span
									key={index}
									className='whitespace-nowrap rounded-2xl bg-Light-Accent-Blue py-1 px-4 text-sm italic text-Dark-Blue lg:text-xs'
								>
									{tecnology}
								</span>
							))}
						</div>

						<Dots className='relative z-[11] mx-auto w-full scale-125' />

						<div className='relative bottom-0 flex justify-center gap-3 lg:justify-start'>
							<a
								href={project.repository}
								className='after:content-[" "] relative font-Roboto text-base uppercase italic after:absolute after:bottom-0 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green lg:text-sm'
								target='_blank'
								rel='noreferrer'
							>
								Repositorio
							</a>
							<a
								href={project.live_demo}
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
