import './Reviews.css';
import { reviews } from '../../helpers/reviews';
import Review from './Review';

import { register } from 'swiper/element/bundle';

register();

function Reviews() {
  return (
    <section className="reviews-container">
      <div className="reviews-titles">
        <h5>We listen</h5>
        <h2>Reviews</h2>
      </div>
      <div className="reviews-slider">
        <swiper-container
          style={{
            '--swiper-navigation-color': '#D2B589',
            '--swiper-pagination-color': '#D2B589',
          }}
          breakpoints={JSON.stringify({
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          })}
          space-between="16"
          pagination-clickable="true"
          pagination="true"
        >
          {reviews.map((review) => (
            <swiper-slide key={review.author}>
              <Review author={review.author} reviewText={review.reviewText} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}
export default Reviews;
