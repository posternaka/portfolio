import { Data } from './Data';
import './reviews.css';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
	return (
		<section id='reviews' className='reviews container section'>
			<h2 className='section__title'>My clients say</h2>
			<span className='section__subtitle'>Reviews</span>

			<Swiper
				className='reviews__container'
				loop={true}
				grabCursor={true}
				spaceBetween={24}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination]}
			>
				{Data.map(({ id, photo, title, description }) => {
					return (
						<SwiperSlide className='reviews__card' key={id}>
							<img
								src={photo}
								alt={`${title} photo`}
								className='reviews__photo'
							/>
							<h3 className='reviews__name'>{title}</h3>
							<p className='reviews__description'>{description}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Reviews;
