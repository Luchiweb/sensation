import PropTypes from 'prop-types';

import './CircleIcon.css';

function CircleIcon({ imgUrl, title, bg }) {
  return (
    <div className="circle-icon">
      <div className={`circle ${bg ?? ''}`}>
        <img src={imgUrl} alt="img" />
      </div>
      {title ? <h6>{title}</h6> : <></>}
    </div>
  );
}

CircleIcon.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  bg: PropTypes.string
};
export default CircleIcon;
