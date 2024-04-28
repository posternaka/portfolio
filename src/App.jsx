import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Reviews from './components/reviews/Reviews';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

import './index.css';

const App = () => {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
				<Skills />
				<Services />
				<Qualification />
				<Reviews />
				<Contact />
				<Footer />
			</main>
		</>
	);
};

export default App;
