import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h2 className='footer__title'>Nikita</h2>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>

					<li>
						<a href='#skills' className='footer__link'>
							Skills
						</a>
					</li>

					<li>
						<a href='#qualification' className='footer__link'>
							Qualification
						</a>
					</li>

					<li>
						<a href='#reviews' className='footer__link'>
							Reviews
						</a>
					</li>

					<li>
						<a href='#contact' className='footer__link'>
							Contact me
						</a>
					</li>
				</ul>

				<div className='footer__social'>
					<a
						href='https://www.linkedin.com/in/nikitapetrenko97'
						className='footer__social-link'
						target='_blank'
					>
						<i className='uil uil-linkedin-alt'></i>
					</a>
					<a
						href='https://github.com/posternaka'
						className='footer__social-link'
						target='_blank'
					>
						<i className='uil uil-github-alt'></i>
					</a>
					<a
						href='https://t.me/posternaka'
						className='footer__social-link'
						target='_blank'
					>
						<i className='uil uil-telegram-alt'></i>
					</a>
				</div>

				<span className='footer__copy'>
					Nikita Petrenko. All right reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
