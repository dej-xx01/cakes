import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function CheckoutLayout(){
    const location = useLocation()
    const routerUrl = location.pathname
    // console.log(routerUrl)
    const checkoutUnderline= {
        width : routerUrl === "/checkout/payment" ? "63%" : routerUrl === "/checkout/summary" ? "100%" : "25%",
        borderBottomRightRadius: routerUrl === "/checkout/summary" && "10px",
        borderTopRightRadius: routerUrl === "/checkout/summary" && "10px"
    }
    return(
        <>
            <header>
                <h1>Checkout</h1>
            </header>
            <div className="checkout-container">
                <div className="checkout-nav">
                    <ul>
                        <li><Link to= ".">Delivery</Link></li>
                        <li><Link to = "payment">Payment</Link></li>
                        <li><Link to = "summary">Summary</Link></li>
                    </ul>
                    <div className="underline"><span style={checkoutUnderline}></span></div>
                </div>
            </div>
            <Outlet/>
            <div className="checkout-help-container">
                <h1>NEED HELP?</h1>
                <p>Contact an assistant to help you</p>
                <button>Chat <img src="../images/chat.png"/></button>
            </div>         
        </>
    )
}