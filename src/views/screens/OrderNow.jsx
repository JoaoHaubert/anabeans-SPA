import React from 'react';

const OrderNow = props => (
    <div>
        <h1>There you go!</h1>
        <p>We are taking the orders by WhatsApp, please click in the button bellow
            to make yours.
        </p>
        
        <button className="btn" onClick = {event => {
            event.preventDefault();
            window.open("https://api.whatsapp.com/send?1=en_IE&phone=3530834390950",
             "_blank")
        }}>
            Order Here
        </button>
        
    </div>
)

export default OrderNow