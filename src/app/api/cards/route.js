import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://core.mend.zone/client/getMachineTestDetail/1/110001/N/OFFER',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'dU9Aq8mxlFtAH9Vybr7OyUezYB5CE4qTdU9Aq8mxlFtAH9Vybr7OyUezYB5CE4qT',
      },
      data: {
        clientKey: "9IEcgUVWNOjW-lnmP_KiMw==",
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
