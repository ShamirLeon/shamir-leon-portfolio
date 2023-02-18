import AboutMe from './components/About Me/AboutMe';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NavBar from './components/navBar/NavBar';
import Projects from './components/ProjectsC/Projects';
import Skills from './components/Skills/Skills';
import FooterS from './components/Footer/FooterS';

const App = () => {
	return (
		<div className='relative'>
			<NavBar />
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
			<FooterS></FooterS>
		</div>
	);
};

export default App;
