const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='uil uil-trophy about__icon'></i>
				<h3 className='about__title'>Experience</h3>
				<span className='about__subtitle'>1.5 year</span>
			</div>

			<div className='about__box'>
				<i className='uil uil-briefcase-alt about__icon'></i>
				<h3 className='about__title'>Completed</h3>
				<span className='about__subtitle'>12 + Projects</span>
			</div>

			<div className='about__box'>
				<i className='uil uil-comment-alt-question about__icon'></i>
				<h3 className='about__title'>Support</h3>
				<span className='about__subtitle'>24/7</span>
			</div>
		</div>
	);
};

export default Info;
