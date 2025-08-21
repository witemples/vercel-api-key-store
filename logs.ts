// POST /api/logs
export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ message: "Agent activity logged", data: body });
}
