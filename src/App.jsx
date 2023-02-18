import AboutMe from './components/About Me/AboutMe';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NavBar from './components/navBar/NavBar';
import Projects from './components/ProjectsC/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
	return (
		<div className='relative'>
			<NavBar />
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;
