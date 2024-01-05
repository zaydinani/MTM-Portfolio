import react from 'react'
import "../scss/Contact.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h3>Reach out</h3>
            <form>
                <input type="text" placeholder='Full name' />
                <input type="email" placeholder='Email' />

                <input type="text" placeholder='Subject' />

                <textarea placeholder='Message'></textarea>

                <button>
                    SEND
                </button>
            </form>
        </div>
    )
}

export default Contact