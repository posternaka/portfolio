const ScrollMouse = () => {
	return (
		<div className='home__scroll'>
			<a href='#about' className='home__scroll-button button--flex'>
				<svg
					height='32px'
					width='32px'
					className='home__scroll-mouse'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					viewBox='0 0 512 512'
					xmlSpace='preserve'
				>
					<path
						style={{ fill: 'var(--title-color)' }}
						d='M256,0C132.889,0,101.369,81.918,101.369,136.437v239.128C101.369,430.082,132.889,512,256,512
	s154.631-81.918,154.631-136.435V136.437C410.631,81.918,379.111,0,256,0z'
					/>
					<path
						style={{ fill: 'var(--text-color)' }}
						d='M256,270.545c-4.714,0-8.533-3.82-8.533-8.533V34.133c0-4.714,3.82-8.533,8.533-8.533
	c4.714,0,8.533,3.82,8.533,8.533v227.879C264.533,266.726,260.714,270.545,256,270.545z'
					/>
					<path
						className='wheel'
						style={{ fill: 'var(--container-color)' }}
						d='M256,77.692c-16.651,0-30.151,13.499-30.151,30.151v46.326c0,16.653,13.5,30.151,30.151,30.151
	s30.151-13.499,30.151-30.151v-46.326C286.151,91.191,272.651,77.692,256,77.692z'
					/>
				</svg>
				<span className='home__scroll-name'>Scroll Down</span>
				<i className='uil uil-angle-down home__scroll-arrow'></i>
			</a>
		</div>
	);
};

export default ScrollMouse;
