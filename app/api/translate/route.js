import translate from "translate-google";

export async function POST(req) {
  const body = await req.json();

  const result = await translate(body.text, {
    to: body.lang,
  });

  return Response.json({ translated: result });
}