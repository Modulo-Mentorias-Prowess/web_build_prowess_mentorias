import React from 'react'
import Slider from 'infinite-react-carousel'
import './slider.css'

const Carousel = ({ images }) => {
	return (
		<section className='slider'>
			{/* <h1 className='slider__title'></h1> */}
			<Slider className='slider__content'>
				{images.map((image) => (
					<div key={image.id} className='slider__content--item'>
						<img src={image.image} alt={image.title} />
						{/* <span className='slider-description'>{image.title}</span> */}
					</div>
				))}
			</Slider>
		</section>
	)
}

export default Carousel