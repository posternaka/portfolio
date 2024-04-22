import CV from '../../assets/Nikita_Petrenko.pdf';
import AboutImg from '../../assets/photo.jpg';
import Info from './Info';
import './about.css';

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About me</h2>
			<span className='section__subtitle'>My introduction</span>

			<div className='about__container container grid'>
				<img src={AboutImg} alt='' className='about__img' />
				<div className='about__data'>
					<Info />
					<p className='about__description'>
						I also have experience in backend development node.js + express, orm
						sequelize - mysql. I like creating not only beautiful, but also easy
						to use UI. I’m also working on improving my skills in TS, UI in
						order to create a good quality product. I’m ready for new projects
						and always open for cooperation.
					</p>

					<a download='' href={CV} className='button button--flex'>
						Download CV
						<i className='uil uil-cloud-download'></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
