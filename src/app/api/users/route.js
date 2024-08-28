import db from "@/../lib/db";

export async function GET(req) {
  try {
    const [rows] = await db.query("SELECT * FROM users");
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
