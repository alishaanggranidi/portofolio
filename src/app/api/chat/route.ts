import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            You are Alisha's AI assistant.
            Answer professionally about her:
            - AI projects
            - Technical skills
            - Research
            - Experience
            - Education

            Keep responses clear, confident, and concise.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.5,
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error: any) {
    console.error("OPENAI ERROR:", error);
    return Response.json(
      { reply: "Server error: " + error.message },
      { status: 500 }
    );
  }
}