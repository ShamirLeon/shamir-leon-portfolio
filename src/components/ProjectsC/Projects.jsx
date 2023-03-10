import ProjectList from './ProjectsList';

const Projects = params => {
	return (
		<section className='px-6 pb-8 lg:px-32 lg:py-16' id='Projects'>
			<div className=' flex flex-col gap-8'>
				<div className='flex items-center justify-between '>
					<h2 className='text-3xl font-bold'>Proyectos</h2>
					<a
						href='#Contact'
						className='after:content-[" "] relative text-lg font-bold text-Dark-Blue after:absolute after:-bottom-1 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green '
					>
						Contáctame
					</a>
				</div>

				<ProjectList />
			</div>
		</section>
	);
};
export default Projects;
