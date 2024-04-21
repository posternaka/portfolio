import './home.css';
import Data from './Data';
import ScrollMouse from './ScrollMouse';
import Social from './Social';

const Home = () => {
	return (
		<section className='home section' id='home'>
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<Social />

					<div className='home__img'></div>

					<Data />
				</div>

				<ScrollMouse />
			</div>
		</section>
	);
};

export default Home;
