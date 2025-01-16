"use client";

import Image from "next/image";
import { message } from "antd";
import { useContext, useEffect, useState } from "react";
const Cashfree = require("@cashfreepayments/cashfree-js");
import axios from "axios";
import Button from "./waButton";
import { eventContext } from "@/app/context/MyContext";
import { HOST } from "@/lib/utilities";

interface FormData {
  fullName: string;
  email: string;
  contactNo: string;
  contactNo2: string;
  institute: string;
  year: string;
  level: string;
  age: string;
  gender: string;
  stream: string;
  events: string[];
  members: number;
  member: string[];
  teamLeader: string;
  teamName: string;
}

export default function page() {
  const [Data, setData] = useState<FormData>({
    fullName: "",
    email: "",
    teamName: "",
    teamLeader: "",
    contactNo: "",
    contactNo2: "",
    institute: "",
    year: "",
    level: "",
    age: "",
    gender: "",
    stream: "",
    member: [],
    members: 0,
    events: [],
  });

  const eventContextValue = useContext(eventContext);
  const ticketData = eventContextValue?.ticketData;
  const setTicketData = eventContextValue?.setTicketData;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);

      const data: FormData = {
        fullName: searchParams.get("fullName") || "",
        email: searchParams.get("email") || "",
        contactNo: searchParams.get("contactNo") || "",
        contactNo2: searchParams.get("contactNo2") || "",
        institute: searchParams.get("institute") || "",
        year: searchParams.get("year") || "",
        level: searchParams.get("level") || "",
        age: searchParams.get("age") || "",
        gender: searchParams.get("gender") || "",
        stream: searchParams.get("stream") || "",
        members: Number(searchParams.get("members")) || 0,
        teamLeader: searchParams.get("teamLeader") || "",
        teamName: searchParams.get("teamName") || "",
        events: searchParams.get("events")?.split(",") || [], // Ensure array fallback
        member: searchParams.get("member")?.split(",") || [], // Ensure array fallback
      };

      setData(data); // Set data to state
    } else {
      console.error("Window is not defined");
    }
  }, []);

  const [paymentDone, setpaymentDone] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    message.info("Please wait...");
    try {
      const cashfree = await Cashfree.load({
        mode: "sandbox", // Change to 'test' for testing
      });

      console.log(Data);

      const response = await axios.post(
        `${HOST}/api/botPayments`,
        { ...Data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      if (!response.data) {
        message.info("Please try again");
        return;
      }

      const checkoutOptions = {
        paymentSessionId: response.data.data.payment_session_id,
        redirectTarget: "_modal",
        appearance: {
          width: "700px",
          height: "700px",
        },
      };

      const result = await cashfree.checkout(checkoutOptions);

      console.log(result);
      if (result.redirect) {
        message.success("Payment Completed");
      } else if (result.error) {
        message.error("Payment failed. Please try again.");
        console.error(result.error);
      } else if (result.paymentDetails) {
        message.success("Payment has been completed");
        message.info("Please wait for redirection");

        const apiEndpoint = Data.teamName
          ? `https://cyberia-node-server.vercel.app/api/user/registerTeamUser`
          : `https://cyberia-node-server.vercel.app/api/user/registerSoloUser`;

        const registerResponse = await axios.post(
          apiEndpoint,
          { ...Data },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(registerResponse.data);

        if (registerResponse.status === 201 && registerResponse.data.SoloData) {
          message.success("Registration successful");
          setpaymentDone(true);
          setTicketData?.(registerResponse.data.SoloData);
        } else {
          message.error("An error occurred. Contact customer support.");
        }
      }
    } catch (error) {
      message.error("Technical error or invalid credentials");
      console.error(error);
    }
  };

  const handleWhatsapp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const phoneNumber = "+1 (415) 523-8886";
    const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    window.location.href = `https://wa.me/${cleanPhoneNumber}?text=ticket&file=${encodeURIComponent(
      ticketData?.ticket
    )}`;
  };

  return (
    <div className="flex w-full justify-center flex-col gap-5 items-center h-screen text-center">
      <h1 className="text-3xl font-bold">Welcome! to Cyberia Payment Page</h1>
      <button
        onClick={handleSubmit}
        className="text-white font-semibold px-5 py-1 text-xl border-2 rounded-md"
        type="button"
      >
        Pay Now
      </button>
      {paymentDone && <Button onClick={handleWhatsapp} />}
    </div>
  );
}
