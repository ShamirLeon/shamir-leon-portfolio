import ShamirIcon from '../../assets/Images/Image-Nav.png';

const NavBar = params => {
	return (
		<nav className='fixed z-50 flex w-full items-center justify-between gap-4 bg-White/80 py-[18px] px-6 font-Sora text-sm font-bold text-Dark-Blue backdrop-blur-sm'>
			<a href='#AboutMe'>
				<img
					src={ShamirIcon}
					alt='Shamir León Portfolio'
					className='min-w-10 w-10'
				/>
			</a>
			<ul className='flex gap-4'>
				<li>
					<a href='#Skills'>Habilidades</a>
				</li>
				<li>
					<a href='#Projects'>Proyectos</a>
				</li>
				<li>
					<a href='#Contact'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
