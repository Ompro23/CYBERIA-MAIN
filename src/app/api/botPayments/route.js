import { NextResponse } from 'next/server';
import { connectDb } from '@/helper/db';
import { Events } from '@/models/Events';
import dotenv from 'dotenv';
import { Cashfree } from 'cashfree-pg';
import crypto from 'crypto';
import { EventEmitter } from 'stream';

dotenv.config();
// Connect to the database
connectDb()
// CORS headers
const setCorsHeaders = (response) => {
  // Allow any origin (be sure to restrict this to specific origins in production)
  response.headers.set('Access-Control-Allow-Origin', 'https://msudcacyberia.in');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS'); // Allow all necessary methods
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept'); // Allow necessary headers
  response.headers.set('Access-Control-Allow-Credentials', 'true'); // If you want to send credentials (cookies, HTTP authentication, etc.)

  return response;
};

Cashfree.XClientId = process.env.CLIENT_ID_TEST;
Cashfree.XClientSecret = process.env.CLIENT_SECRET_TEST;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

// Function to create order ID
function createOrderId() {
  const uniqueId = crypto.randomBytes(16).toString("hex");

  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);

  const orderId = hash.digest("hex");

  return orderId.substr(0, 12);
}

// POST request handler
export async function POST(request) {
  try {
    const body = await request.json();

    console.log(body)
    // Fetch the event data from the database based on the event ID
    const eventId = body.events;
    console.log(eventId)
    // Assuming the event ID is passed in the request
    const event = await Events.find({ title: { $in: body.events } });


    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // Calculate the price based on event data
    const totalPrice = event.reduce((sum, event) => sum + (event.price || 0), 0);



    console.log(totalPrice);

    // Use the event price in the order request
    const requestData = {
      "order_amount": totalPrice, // Use the calculated price
      "order_currency": "INR",
      "order_id": createOrderId(),
      "customer_details": {
        "customer_id": "node_sdk_prod",
        "customer_name": body.fullName,
        "customer_email": body.email,
        "customer_phone": body.contactNo,
      },
      "order_meta": {
        "return_url": `https://merchant.in/pg/process_return?cf_id=${createOrderId()}`,
      },
    };

    // Format the date
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    // Await the Cashfree.PGCreateOrder call
    const response = await Cashfree.PGCreateOrder("2023-08-01", requestData);

    // Extract the data from the response
    const a = response.data;

    // Return the success response
    const apiResponse = NextResponse.json({
      success: true,
      data: a, // Directly using the response data
    }, { status: 200 });

    return setCorsHeaders(apiResponse);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error }, { status: 400 });
  }
}
