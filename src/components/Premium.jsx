import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/Constants";

const Premium = () => {

  const handelBuyClick = async (type)=>{
    const order = await axios.post(BASE_URL+"/payment/create",
    {
     membershipType: type,
    },

  {withCredentials:true}

)

// open the razorpay dialouge box

const {amount,keyId,currency,notes,orderId} = order.data

   const options = {
     key: keyId, 
     amount: amount, 
     currency,
     name: "SwipeStack",
     description: "Connect with peoples",
     order_id: orderId, // This is the order_id created in the backend
     callback_url: "http://localhost:3000/payment-success", // Your success URL
     prefill: {
       name:notes.firstName + " " + notes.lastName,
       email: notes.lastName,
       contact: "9999999999",
     },
     theme: {
       color: "#F37254",
     },
   };

 const rzp = new window.Razorpay(options);
 rzp.open();


  }

  return (
    <div className="flex items-center justify-center min-h-screen ml-0 lg:ml-10 p-4 lg:p-0">
      <div className="flex w-full max-w-6xl flex-col lg:flex-row px-4 lg:px-8 gap-4 lg:gap-0">
        {/* Silver Plan */}
        <div className="card bg-base-300 rounded-box grid place-items-center p-6 lg:p-8 w-full">
          <div className="text-center w-full">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              Silver Membership
            </h2>
            <div className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              ₹499/month
            </div>

            <div className="text-left mb-4 lg:mb-6 space-y-2 text-sm lg:text-base">
              <p>✓ Unlimited access to basic features</p>
              <p>✓ 24/7 customer support</p>
              <p>✓ Ad-free experience</p>
              <p>✓ Access on 5 devices</p>
              <p>✓ Monthly exclusive content</p>
            </div>

            <button
              onClick={() => handelBuyClick("silver")}
              className="btn btn-primary w-full text-sm mt-16 lg:text-base"
            >
              Buy Silver Plan
            </button>
          </div>
        </div>

        <div className="divider lg:divider-horizontal px-4 my-2 lg:my-0">
          OR
        </div>

        {/* Gold Plan */}
        <div className="card bg-base-300 rounded-box grid place-items-center p-6 lg:p-8 w-full">
          <div className="text-center w-full">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              Gold Membership
            </h2>
            <div className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              ₹999/month
            </div>

            <div className="text-left mb-4 lg:mb-6 space-y-2 text-sm lg:text-base">
              <p>✓ All Silver benefits</p>
              <p>✓ Priority customer support</p>
              <p>✓ Unlimited devices</p>
              <p>✓ Weekly premium content</p>
              <p>✓ Early access to new features</p>
              <p>✓ Personalized recommendations</p>
              <p>✓ Offline downloads</p>
            </div>

            <button 
            onClick={()=>handelBuyClick("gold")}
            className="btn btn-primary w-full text-sm lg:text-base">
              Buy Gold Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Premium;
