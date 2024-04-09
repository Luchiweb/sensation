import "./Button.css"

// eslint-disable-next-line react/prop-types
function Button({ link, text, size, state }) {
    return (
        <a href={link} className={`button ${size ? size : "small"} ${state ? state : "primary"}`}>{text}</a>
    )
}
export default Button