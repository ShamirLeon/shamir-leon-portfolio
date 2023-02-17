import ProjectCard from './ProjectCard';

const Projects = params => {
	return (
		<section className='px-6'>
			<div className=' flex flex-col gap-8'>
				<div className='flex items-center justify-between'>
					<h2 className='text-3xl font-bold'>Proyectos</h2>
					<a
						href='#Contact'
						className='after:content-[" "] relative text-lg font-bold text-Dark-Blue after:absolute after:-bottom-1 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green '
					>
						Contáctame
					</a>
				</div>

                <ProjectCard></ProjectCard>

			</div>
		</section>
	);
};
export default Projects;