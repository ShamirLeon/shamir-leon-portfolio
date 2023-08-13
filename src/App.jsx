import AboutMe from './components/About Me/AboutMe';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NavBar from './components/navBar/NavBar';
import Projects from './components/ProjectsC/Projects';

import Provider from './context/Provider';

const App = () => {
	return (
		<>
			<Provider>
				<div className='relative'>
					<NavBar />
					<Hero />
					<AboutMe />
					<Projects />
					<Contact />
				</div>
			</Provider>
		</>
	);
};

export default App;
