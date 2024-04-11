import PropTypes from 'prop-types';

import './Reviews.css'


function Review({ reviewText, author }) {
    return (
        <article className="review">
            <p>{reviewText}</p>
            <h4>{author}</h4>
        </article>
    )
}

Review.propTypes = {
    reviewText: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
export default Review