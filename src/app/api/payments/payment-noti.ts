// app/api/payment/payment-notify.ts
import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

const CF_SECRET_KEY = "cfsk_ma_test_565e8000bb3de8b2e1efcf0616ee3256_627c314c";  // Replace with your Cashfree Secret Key

export async function POST(req: NextRequest) {
  const { signature, orderId, orderAmount, paymentStatus } = await req.json();

  const stringToVerify = `${orderId}|${orderAmount}|${paymentStatus}|${CF_SECRET_KEY}`;
  const expectedSignature = createHmac('sha256', CF_SECRET_KEY).update(stringToVerify).digest('hex');

  if (signature === expectedSignature) {
    // Process the payment (e.g., update order status, send confirmation)
    return NextResponse.json({ message: "Payment successful" });
  } else {
    return NextResponse.json({ message: "Payment verification failed" });
  }
}
