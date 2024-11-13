import axios from 'axios';
import { NextResponse } from 'next/server';

const setCorsHeaders = (response) => {
    response.headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your specific domain in production
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
};

const phonePeMerchantKey = '96434309-7796-489d-8924-ab56988a6076';
const phonePeApiUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';  // Adjust URL based on PhonePe's API documentation

export async function POST(request) {    
  if (request.method === 'POST') {
    const { amount, orderId, customerDetails } = request.body;

    try {
      // Prepare the requestuest payload for PhonePe API
      const paymentrequestuestPayload = {
        merchantId: 'PGTESTPAYUAT86',
        amount: amount, // Amount in smallest currency unit (e.g., paise for INR)
        orderId: orderId, // Unique order ID
        customerDetails: customerDetails, // Customer information (phone, email, etc.)
        callbackUrl: 'https://yourdomain.com/api/payment/callback', // Callback URL to listen for payment response
        // Any other requestuired fields from PhonePe API documentation
      };

      // Make the API requestuest to PhonePe for initiating the payment
      const response = await axios.post(
        `${phonePeApiUrl}/initiatePayment`, 
        paymentrequestuestPayload, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${phonePeMerchantKey}`, // Use your PhonePe Merchant Key here
          },
        }
      );

      // Return the response from PhonePe (e.g., URL to redirect user to PhonePe payment page)
      return NextResponse.status(200).json({ paymentUrl: response.data.paymentUrl });

    } catch (error) {
      console.error('Error initiating payment', error);
      return NextResponse.status(500).json({ error: 'Failed to initiate payment' });
    }
  } else {
    return NextResponse.status(405).json({ message: 'Method Not Allowed' });
  }
}
