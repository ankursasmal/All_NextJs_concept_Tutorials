// Importing necessary modules
import { connection } from '../../../helper/db';
import userInfo from '../../../models/users';
import { NextResponse } from 'next/server';

// Establishing the database connection
async function connectDB() {
    try {
        await connection();
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

// Invoking the database connection function
connectDB();

// Handling POST requests
export async function POST(req) {
    try {
        // Parsing the request body
        const { name, email, phone } = await req.json();
         // Creating a new user information object
        const data = new userInfo({
            name: name,
            email: email,
            phone: phone
        });
         // Saving user information to the database
        const result = await data.save();
        console.log(result)
        console.log('Data stored');

        // Returning the stored data
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error storing data:', error);
        return NextResponse.json({ error: 'Data not stored' }, { status: 401 });
    }
}

// Handling GET requests
export async function GET(req) {
    try {
        // Fetching user information from the database
        const result = await userInfo.find();
        console.log(result)
        console.log('Data fetched');

        // Returning the fetched data
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Data not fetched' }, { status: 400 });
    }
}
