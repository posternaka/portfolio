import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './index.css';

const App = () => {
	return (
		<>
			<Header />

			<main className='main'>
				<Home />
				<About />
			</main>
		</>
	);
};

export default App;
