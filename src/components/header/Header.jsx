import { useState } from 'react';
import './header.css';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');

	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header');
		if (this.scrollY >= 80) header.classList.add('scroll-header');
		else header.classList.remove('scroll-header');
	});

	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html' className='nav__logo'>
					Nikita
				</a>

				<div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list'>
						<li className='nav__item'>
							<a
								href='#home'
								onClick={() => setActiveNav('#home')}
								className={
									activeNav === '#home' ? 'nav__link active__link' : 'nav__link'
								}
							>
								<i className='uil uil-estate nav__icon'></i>
								home
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#about'
								onClick={() => setActiveNav('#about')}
								className={
									activeNav === '#about'
										? 'nav__link active__link'
										: 'nav__link'
								}
							>
								<i className='uil uil-user nav__icon'></i>
								about
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#skills'
								onClick={() => setActiveNav('#skills')}
								className={
									activeNav === '#skills'
										? 'nav__link active__link'
										: 'nav__link'
								}
							>
								<i className='uil uil-arrow-growth nav__icon'></i>
								skills
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#qualification'
								onClick={() => setActiveNav('#qualification')}
								className={
									activeNav === '#qualification'
										? 'nav__link active__link'
										: 'nav__link'
								}
							>
								<i className='uil uil-clipboard-alt nav__icon'></i>
								qualification
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#reviews'
								onClick={() => setActiveNav('#reviews')}
								className={
									activeNav === '#reviews'
										? 'nav__link active__link'
										: 'nav__link'
								}
							>
								<i className='uil uil-clipboard-alt nav__icon'></i>
								reviews
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#contact'
								onClick={() => setActiveNav('#contact')}
								className={
									activeNav === '#contact'
										? 'nav__link active__link'
										: 'nav__link'
								}
							>
								<i className='uil uil-clipboard-alt nav__icon'></i>
								contact me
							</a>
						</li>
					</ul>

					<i
						className='uil uil-times nav__close'
						onClick={() => setShowMenu(!showMenu)}
					></i>
				</div>

				<div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
					<i className='uil uil-apps nav__icon'></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
