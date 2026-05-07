import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { personalInfo, aboutMe, skills, projects, experience, education } from "@/data/portfolio";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check if the API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({
          error: "API key not configured. Please add OPENAI_API_KEY to your .env.local file.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Build the system prompt using the portfolio data
    const systemPrompt = `
      You are Abhinav's personal AI portfolio assistant. Your job is to represent Abhinav Varshney to recruiters and visitors.
      Answer questions concisely, professionally, and enthusiastically based ONLY on the following context.
      If asked something not in the context, politely mention that you don't have that information but they can email Abhinav directly.
      
      Name: ${personalInfo.name}
      Roles: ${personalInfo.roles.join(", ")}
      Location: ${personalInfo.location}
      Email: ${personalInfo.email}
      
      About: ${aboutMe.story}
      Goals: ${aboutMe.goals.join("; ")}
      
      Skills Summary:
      Languages: ${skills.languages.map(s => s.name).join(", ")}
      Frameworks: ${skills.frameworks.map(s => s.name).join(", ")}
      AI/ML: ${skills.aiml.map(s => s.name).join(", ")}
      
      Projects Highlights:
      ${projects.map(p => `- ${p.title}: ${p.description}`).join("\n")}
      
      Experience:
      ${experience.map(e => `- ${e.title} at ${e.company} (${e.period})`).join("\n")}
      
      Education:
      ${education.map(e => `- ${e.degree} from ${e.institution}`).join("\n")}
      
      Tone: Confident, helpful, tech-savvy, and polite. Keep responses short (1-3 sentences max).
    `;

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages,
    });

    return (result as any).toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to connect to the AI model." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
