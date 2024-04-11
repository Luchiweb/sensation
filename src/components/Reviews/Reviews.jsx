import './Reviews.css';
import { reviews } from '../../helpers/reviews';
import Review from './Review';

import { register } from 'swiper/element/bundle';

register();

function Reviews() {
  return (
    <section className="reviews-container">
      <h2>Reviews</h2>
      <div className="reviews-slider">
        <swiper-container
          style={{
            '--swiper-navigation-color': '#D2B589',
            '--swiper-pagination-color': '#D2B589',
          }}
          space-between="20"
          slides-per-view="3"
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
