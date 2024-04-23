import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
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
			</main>
		</>
	);
};

export default App;
