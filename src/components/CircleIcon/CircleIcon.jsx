import PropTypes from 'prop-types';

import './CircleIcon.css';

function CircleIcon({ imgUrl, title }) {
  return (
    <div className="circle-icon">
      <div className="circle">
        <img src={imgUrl} alt="img" />
      </div>
      {title ? <h4>{title}</h4> : <></>}
    </div>
  );
}

CircleIcon.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};
export default CircleIcon;
