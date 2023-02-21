import ShamirIcon from '../../assets/Images/Image-Nav.png';

const NavBar = params => {
	return (
		<nav className='fixed z-50 flex w-full items-center justify-between bg-White/80 py-[18px] px-6 font-Sora text-sm font-bold text-Dark-Blue backdrop-blur-sm lg:px-32'>
			<a href='#Hero'>
				<img
					src={ShamirIcon}
					alt='Shamir León Portfolio'
					className='min-w-10 w-10'
				/>
			</a>
			<ul className='flex gap-4 lg:gap-12'>
				<li>
					<a href='#Skills' className='after:content-[" "] relative after:absolute after:-bottom-3 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green after:opacity-0 hover:after:opacity-100 transition-all'>Habilidades</a>
				</li>
				<li>
					<a href='#Projects' className='after:content-[" "] relative after:absolute after:-bottom-3 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green after:opacity-0 hover:after:opacity-100 transition-all '>Proyectos</a>
				</li>
				<li>
					<a href='#Contact' className='after:content-[" "] relative after:absolute after:-bottom-3 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-full after:bg-Light-Green after:opacity-0 hover:after:opacity-100 transition-all'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
