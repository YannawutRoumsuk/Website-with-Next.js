export async function POST(req) {
  const { message } = await req.json();
  const API_KEY = process.env.ANTHROPIC_API_KEY; // ใช้ค่า API Key จาก .env.local
  console.log(API_KEY);

  if (!API_KEY) {
    return new Response(JSON.stringify({ error: "API Key is missing" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        system: "คุณเป็น AI ที่ช่วยตอบคำถามด้านเทคโนโลยีเท่านั้น",
        messages: [{ role: "user", content: message }],
        max_tokens: 300,
      }),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "API request failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
