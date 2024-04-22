const Data = () => {
	return (
		<div className='home__data'>
			<h1 className='home__title'>Nikita Petrenko</h1>
			<h3 className='home__subtitle'>frontend developer</h3>
			<p className='home__description'>
				I’m a frontend developer and I develop web applications using React,
				SCSS or css-frameworks, Redux Toolkit.
			</p>

			<a href='#contact' className='button button--flex'>
				Say Hello
				<i className='uil uil-message button__icon'></i>
			</a>
		</div>
	);
};

export default Data;
