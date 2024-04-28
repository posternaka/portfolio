import './contact.css';

const Contact = () => {
	return (
		<section className='contact section' id='contact'>
			<h2 className='section__title'>Get in touch</h2>
			<span className='section__subtitle'>Contact me</span>

			<div className='contact__container container grid'>
				<div className='contact__content'>
					<h3 className='contact__title'>Talk to me</h3>

					<div className='contact__info'>
						<div className='contact__card'>
							<i className='uil uil-at contact__card-icon'></i>

							<h3 className='contact__card-title'>Gmail</h3>
							<span className='contact__card-data'>
								nik.petrenko97@gmail.com
							</span>

							<a
								href='mailto:nik.petrenko97@gmail.com'
								className='contact__button'
							>
								Write me
								<i className='uil uil-angle-right contact__card-arrow'></i>
							</a>
						</div>

						<div className='contact__card'>
							<i className='uil uil-telegram-alt contact__card-icon'></i>

							<h3 className='contact__card-title'>Telegram</h3>
							<span className='contact__card-data'>@posternaka</span>

							<a href='https://t.me/posternaka' className='contact__button'>
								Write me
								<i className='uil uil-angle-right contact__card-arrow'></i>
							</a>
						</div>

						<div className='contact__card'>
							<i className='uil uil-linkedin-alt contact__card-icon'></i>

							<h3 className='contact__card-title'>Linkedin</h3>
							<span className='contact__card-data'>nikitapetrenko97</span>

							<a
								href='https://www.linkedin.com/in/nikitapetrenko97'
								className='contact__button'
							>
								Write me
								<i className='uil uil-angle-right contact__card-arrow'></i>
							</a>
						</div>
					</div>
				</div>

				<div className='contact__content'>
					<h3 className='contact__title'>Write me your project</h3>

					<form className='contact__form'>
						<div className='contact__form-div'>
							<label className='contact__form-tag'>Name</label>
							<input
								type='text'
								name='name'
								className='contact__form-input'
								placeholder='Insert your name'
								required
							/>
						</div>

						<div className='contact__form-div'>
							<label className='contact__form-tag'>Mail</label>
							<input
								type='email'
								name='name'
								className='contact__form-input'
								placeholder='Insert your email'
								required
							/>
						</div>

						<div className='contact__form-div contact__form-area'>
							<label className='contact__form-tag'>Project</label>
							<textarea
								name='project'
								cols='30'
								rows='10'
								className='contact__form-input'
								placeholder='Write your project'
							></textarea>
						</div>

						<button className='button button--flex'>
							Send Message
							<i className='uil uil-message button__icon'></i>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
