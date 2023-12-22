import react from 'react'
import "../scss/Contact.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    return(
        <div className="contact-container">
            <h3>Feel free to reach out</h3>
            <form>
                <div>
                    <input type="text" placeholder='Full name' />
                    <input type="email" placeholder='Email' />
                </div>

                <input type="text" placeholder='Subject' />

                <textarea placeholder='Message'></textarea>

                <button>
                        SUBSCRIBE
                        <FaLongArrowAltRight />   
                    </button>
            </form>
        </div>
    )
}

export default Contact