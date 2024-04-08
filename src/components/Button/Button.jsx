import "./Button.css"

// eslint-disable-next-line react/prop-types
function Button({ link, text, size }) {
    return (
        <a href={link} className={`button ${size ? size : ""}`}>{text}</a>
    )
}
export default Button