import { useState } from 'react';
import './qualification.css';

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = index => {
		setToggleState(index);
	};

	return (
		<section className='qualification section'>
			<h2 className='section__title'>Qualification</h2>
			<span className='section__subtitle'>My personal journey</span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div
						className={
							toggleState === 1
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(1)}
					>
						<i className='uil uil-brain qualification__icon'></i> Education
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(2)}
					>
						<i className='uil uil-bag-alt qualification__icon'></i> Experience
					</div>
				</div>

				<div className='qualification__sections'>
					<div
						className={
							toggleState === 1
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>HTML Academy</h3>
								<span className='qualification__subtitle'>
									HTML & CSS courses
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2022 - 2022
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div>
								<h3 className='qualification__title'>Redev</h3>
								<span className='qualification__subtitle'>
									Frontend courses
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2021 - 2022
								</div>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>Lerna</h3>
								<span className='qualification__subtitle'>
									Frontend Developer
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2023 - 2024
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div>
								<h3 className='qualification__title'>Itransition</h3>
								<span className='qualification__subtitle'>
									Trainee Fullstack Developer
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2023 - 2023
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>Redev</h3>
								<span className='qualification__subtitle'>
									Trainee Frontend Developer
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>2022 - 2022
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
