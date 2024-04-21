const Data = () => {
	return (
		<div className='home__data'>
			<h1 className='home__title'>Nikita Petrenko</h1>
			<h3 className='home__subtitle'>frontend developer</h3>
			<p className='home__description'>
				I’m a frontend developer and I develop web applications using React,
				SCSS or css-frameworks, Redux Toolkit. I also have experience in backend
				development node.js + express, orm sequelize - mysql. I like creating
				not only beautiful, but also easy to use UI. I’m also working on
				improving my skills in TS, UI in order to create a good quality product.
				I’m ready for new projects and always open for cooperation.
			</p>

			<a href='#contact' className='button button--flex'>
				Say Hello
				<i className="uil uil-message button__icon"></i>
			</a>
		</div>
	);
};

export default Data;
