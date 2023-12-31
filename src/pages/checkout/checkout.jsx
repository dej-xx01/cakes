import React from "react";
import { Link } from "react-router-dom";
export default function Checkout(){
    const buttonStyle = {
        width: "100%",
        padding: "0.5rem 0",
        color: "white",
        backgroundColor: "#a71f23",
        border: 0,
        borderRadius: "4px",
        marginTop: "1rem"
    }
    return(
        <div className="checkout">
            <form id="delivery-form">
                <h1>CUSTOMER DETAILS</h1>
                <div id="customer-details">
                    <label htmlFor="firstname"> Firstname<input type="text" id="firstname"/> </label>
                    <label htmlFor="lastname"> Lastname<input type="text" id="lastname"/> </label>
                    <label htmlFor="phone-no"> Phone-number<input type="text" id="phone-no"/> </label>
                    <label htmlFor="email"> Email-address<input type="text" id="email"/> </label>
                    <label htmlFor="eddress"> Address <span>(should include streetname, house number, city and state)</span><input type="text" id="address"/> </label>
                </div>
                <div>
                <h1>DELIVERY METHOD <span>[How do you want your order delivered]</span></h1>
                {/* <h2>[How do you want your order delivered]</h2> */}
                    <div className="delivery-mode">
                        <label htmlFor = "pickup">Pick-up at Head Office <br/> Ready for delivery <span>8 hours after completing order</span></label>
                        <input type="radio" name="pickup" id="pickup"/>
                    </div>
                    <div className="delivery-mode">
                        <label htmlFor = "doorstep">Doorstep Delivery <br/> Ready for delivery <span>8 hours after completing order or add a note telling us your preferred delivery day</span>
                        <ul className="doorstep-d-info">
                            <li>Free delivery for orders in Lagos, Ibadan & Abuja</li>
                            <li>Delivery fee to be paid on delivery for orders outside Lagos, Ibadan & Abuja</li>
                            <li>Ensure your address is correct as Delivery Agents would only deliver to the stated address</li>
                            <li>On delivery day, delivery time may vary due to possible eventualities. </li>
                        </ul>
                        </label>
                        <input type="radio" name="doorstep" id="doorstep"/>  
                    </div>    
                </div>
                <div className="notes-voucher-container">
                    <h1>ORDER NOTES<span>(optional)</span></h1>
                    <input type="text" />
                    <h1>ADD VOUCHER<span>(optional)</span></h1>
                    <input type="text" />
                </div>
                <Link to= "./payment"><button style={buttonStyle}>Continue to payment</button></Link>
            </form>
        </div>
    )
}