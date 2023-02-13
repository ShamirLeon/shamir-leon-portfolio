import AboutMe from './components/About Me/AboutMe';
import Hero from './components/Hero/Hero';
import NavBar from './components/navBar/NavBar';

const App = () => {
	return (
		<div className='relative'>
			<NavBar />
			<Hero />
			<AboutMe />
		</div>
	);
};

export default App;
