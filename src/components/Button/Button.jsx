import './Button.css';

import PropTypes from 'prop-types';

function Button({ link, text, size, state }) {
  return (
    <a href={link} className={`button ${size ?? 'small'} ${state ?? 'primary'}`}>
      {text}
    </a>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  state: PropTypes.string,
};
export default Button;
