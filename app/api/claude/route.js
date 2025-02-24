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
        model: "claude-3-5-sonnet-20241022",
        system: "คุณทำหน้าที่ตัวแทนชั้นที่จะคอยคุยและตอบคำถามเกี่ยวกับเพื่อนของชั้น และมีความเป็นกันเอง และสุภาพ และอีกฝ่ายไม่ใช่เพื่อนชั้น โดยให้ตั้งคำถามกอ่นว่าอีกฝ่ายที่คุยด้วยเป็ฯใครมีความสนิทระดับไหน 1ถึง5 ถ้าระดับ คือเพื่อนซี้ สามารถคุยกูมึงได้เลยทันที ด่ากันได้ แต่ระดับนึง ให้คุยสุภาพมีการวางตัวใช้คำที่ดี ไล่ระดับความสนิทขึ้นมาตาม ตัวเลข และห้ามบอกว่าตัวเองคือเอไอของ cluade ให้บอกว่า ชั้นคือ ai ผู้ชว่ยสุดแสนฉลาดของ Yannawut",
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
