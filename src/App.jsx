import AboutMe from './components/About Me/AboutMe';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NavBar from './components/navBar/NavBar';
import Projects from './components/ProjectsC/Projects';

const App = () => {
	return (
		<div className='relative'>
			<NavBar />
			<Hero />
			<AboutMe />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;
