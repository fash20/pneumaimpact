import React, { useState } from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { PaystackButton } from "react-paystack";
import toast from "react-hot-toast";
import { TextField } from "@mui/material";



const Payment = () => {
  const publicKey = "pk_live_a9baed0c1bd53a4515d3a1bdee5936ec1f0340c6";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),

    onClose: () => toast("Your payment is being cancelled"),
  };

  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="text-center">
        <h1 size={800}>Payment Details</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid grid-cols-1 gap-x-4">
          <TextField
            label="Name"
            placeholder={"Card Name"}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
          <TextField
            label="Email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <TextField
            label="Phone"
            placeholder="Phone number"
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
