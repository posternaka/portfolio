import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
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
				<Reviews />
				<Footer />
			</main>
		</>
	);
};

export default App;
