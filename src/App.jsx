import AboutMe from './components/About Me/AboutMe';
import Hero from './components/Hero/Hero';
import NavBar from './components/navBar/NavBar';
import Skills from './components/Skills/Skills';

const App = () => {
	return (
		<div className='relative'>
			<NavBar />
			<Hero />
			<AboutMe />
			<Skills />
		</div>
	);
};

export default App;
