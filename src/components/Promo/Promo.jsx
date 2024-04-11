import Button from "../Button/Button"
import "./Promo.css"

function Promo() {
    return (
        <section className="promo">
            <div className="reminder">
                <h5>Is your wedding still on the horizon?</h5>
                <h3>We will remind you about us after your wedding</h3>
                <Button text="Set reminder" size="small" state="white" link="#" />
            </div>
            <div className="book">
                <h5>It’s all starts with design</h5>
                <h3>Get 30% off Design Services</h3>
                <Button text="Book a designer" size="small" state="white" link="#" />
            </div>
        </section>
    )
}
export default Promo