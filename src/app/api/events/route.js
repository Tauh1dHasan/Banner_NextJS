import db from "@/../lib/db";

export async function GET(request) {
  try {
    const [rows] = await db.query("SELECT id, title, img FROM events");
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
