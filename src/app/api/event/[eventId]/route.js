import db from "@/../lib/db";

export async function GET(req, { params }) {
  const { eventId } = params;

  try {
    
    const [eventDetails] = await db.query("SELECT * FROM events WHERE id = ?", [ eventId ]);
    if (!eventDetails[0]) {
        return new Response(JSON.stringify({ message: 'Event not found' }), { status: 404 });
    }

    const [banners] = await db.query("SELECT * FROM banners WHERE event_id = ?", [ eventId ]);

    return new Response(JSON.stringify({event: eventDetails[0], banners: banners}), {status: 200});

  } catch (error) {

    return new Response(JSON.stringify({message: error.message}), {status: 500});

  }
}
