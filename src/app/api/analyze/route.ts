import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const MOCK_DATA = {
  uxScore: 82,
  issues: [
    { title: "Visual Hierarchy Restructured", description: "Primary call-to-action was blending into the background.", type: "fixed" },
    { title: "Whitespace Balanced", description: "Grouped related elements and added 24px padding.", type: "fixed" },
    { title: "Contrast Increased", description: "Adjusted subtitle color for better readability.", type: "info" }
  ],
  categories: {
    visualHierarchy: 75,
    clarity: 80,
    accessibility: 85,
    consistency: 90
  },
  heatmapFocus: ["Top-right navigation", "Main hero image"],
  redesignLayout: "A clean modern SaaS layout with a strong hierarchy, left-aligned typography, and a highly contrasting primary CTA button. Content is divided into a 60/40 split with the visual asset on the right."
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      console.warn("No GROQ_API_KEY found. Returning mock data.");

      await new Promise(resolve => setTimeout(resolve, 3000));
      return NextResponse.json(MOCK_DATA);
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");
    const dataUri = `data:${image.type};base64,${base64Image}`;

    const prompt = `You are a senior UX designer auditing a real product UI.

Analyze the uploaded UI screenshot carefully and return:
1. UX Issues (specific, not generic)
2. UX Score (0-100 based on usability)
3. Category breakdown: Visual Hierarchy, Clarity, Accessibility, Consistency
4. Heatmap focus areas (describe where users will look first)

IMPORTANT:
- Be specific to THIS UI (do not give generic advice)
- Reference actual layout patterns you see
- Mention concrete problems (spacing, contrast, CTA placement, etc.)

Redesign the UI described below.
IMPORTANT RULES:
- Do NOT generate a generic template
- Base redesign strictly on detected issues
- Maintain same purpose (do not change product type)
- Improve spacing, hierarchy, CTA clarity, and layout

STYLE: Clean modern SaaS, Strong hierarchy, Minimal but structured.

Return ONLY a valid JSON object with the following structure (no markdown code blocks, just raw JSON):
{
  "uxScore": number,
  "issues": [
    { "title": "string", "description": "string", "type": "fixed" | "info" }
  ],
  "categories": {
    "visualHierarchy": number,
    "clarity": number,
    "accessibility": number,
    "consistency": number
  },
  "heatmapFocus": ["string"],
  "redesignLayout": "string (structured layout description for the improved UI)"
}`;

    let text = "";
    let attempt = 0;
    while (attempt < 3) {
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: prompt },
                { type: "image_url", image_url: { url: dataUri } }
              ]
            }
          ],
          model: "meta-llama/llama-4-scout-17b-16e-instruct",
          temperature: 0.5,
        });

        text = chatCompletion.choices[0]?.message?.content || "";
        break;
      } catch (err: any) {
        attempt++;
        if (attempt >= 3 || err.message?.includes("429")) {
          console.warn("API quota exceeded or failed. Falling back to mock data. Error details:", err.message);
          return NextResponse.json(MOCK_DATA);
        }
        console.log(`API busy. Retrying attempt ${attempt}...`);
        await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
      }
    }

    const jsonStr = text.replace(/\`\`\`json\n?|\n?\`\`\`/g, "").trim();

    try {
      const data = JSON.parse(jsonStr);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error("Failed to parse JSON:", text);
      return NextResponse.json({ error: "Invalid JSON response" }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Analysis error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
