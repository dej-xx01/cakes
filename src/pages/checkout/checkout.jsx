import React from "react";
export default function Checkout(){
    return(
        <>
            <form>
                <h1>CUSTOMER DETAILS</h1>
                <label htmlFor="firstname"> Firstname<input type="text" id="firstname"/> </label>
                <label htmlFor="lastname"> Lastname<input type="text" id="lastname"/> </label>
                <label htmlFor="phone-no"> Phone-number<input type="text" id="phone-no"/> </label>
                <label htmlFor="email"> Email-address<input type="text" id="email"/> </label>
                <label htmlFor="eddress"> Address <span>(should include streetname, house number, city and state)</span><input type="text" id="address"/> </label>

                <div>
                <h1>DELIVERY METHOD</h1>
                <h2>[How do you want your order delivered]</h2>
                    <div>
                        <label htmlFor = "pickup">Pick-up at Head Office <br/> Ready for delivery <span>8 hours after completing order</span></label>
                        <input type="radio" name="pickup" id="pickup"/>
                    </div>
                    <div>
                        <label htmlFor = "doorstep">Doorstep Delivery <br /> Ready for delivery <span>8 hours after completing order or add a note telling us your preferred delivery day</span></label>
                        <input type="radio" name="doorstep" id="doorstep"/>
                        <ul className="doorstep-d-info">
                            <li>Free delivery for orders in Lagos, Ibadan & Abuja</li>
                            <li>Delivery fee to be paid on delivery for orders outside Lagos, Ibadan & Abuja</li>
                            <li>Ensure your address is correct as Delivery Agents would only deliver to the stated address</li>
                            <li>On delivery day, delivery time may vary due to possible eventualities. </li>
                        </ul>
                    </div>    
                </div>
                <h1>ORDER NOTES<span>(optional)</span></h1>
                <input type="text" />
                <h1>ADD VOUCHER<span>(optional)</span></h1>
                <input type="text" />
            </form>
        </>
    )
}