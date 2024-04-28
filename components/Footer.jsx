import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                {/* <a href="\assests\Screenshot 2024-04-19 232825.png" alt="logo"/> */}

            </div>
            <div className="footer_center">
                <h3>Useful Links</h3>
                <ul>

                    <li>About us</li>
                    <li>Terms and Conditions</li>
                    <li>Return and Refund Policy</li>

                </ul>
            </div>
            <div className="footer_right">
                <h3>Contact</h3>
                <div className="footer_right_info">
                    <LocalPhone />
                    <p>+91-9999961400</p>
                </div>
                <div className="footer_right_info">
                    <Email />
                    <p>dreamdwell@support.com</p>
                </div>
                {/* <img src="\assests\paymentnew.jpg" alt="payment"/> */}
            </div>
        </div>
    )
}

export default Footer; 