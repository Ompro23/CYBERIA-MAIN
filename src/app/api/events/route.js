import { NextResponse } from 'next/server';
import { connectDb } from '@/helper/db';
import { Events } from '@/models/Events';

// Connect to the database
connectDb();

// CORS headers
const setCorsHeaders = (response) => {
    response.headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your specific domain in production
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
};

export async function GET(request) {
    try {
        const Event = await Events.find({});
        const response = NextResponse.json({ Event }, { status: 200 });
        return setCorsHeaders(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const jsonData = await request.json();
        const Event = new Events({ ...jsonData });
        await Event.save();

        const response = NextResponse.json({
            success: true,
            Data: Event,
        }, { status: 201 });

        return setCorsHeaders(response);
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function PATCH(request) {
    try {
        const jsonData = await request.json();
        const Event = await Events.findOneAndUpdate({ _id: jsonData._id }, { ...jsonData }, { new: true });

        const response = NextResponse.json({
            success: true,
            Data: Event,
        }, { status: 200 });

        return setCorsHeaders(response);
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

// Handle OPTIONS preflight requests
export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    return setCorsHeaders(response);
}
