import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Generates an image for a specific dish using Gemini.
 * Uses a caching strategy in localStorage to save credits/time on reload.
 */
export const generateDishImage = async (dishName: string, description: string = ''): Promise<string | null> => {
  const cacheKey = `menu_img_${dishName.replace(/\s+/g, '_').toLowerCase()}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    return cached;
  }

  if (!API_KEY) {
    console.warn("API Key missing, using fallback.");
    return null;
  }

  try {
    const prompt = `Professional food photography, close up shot of ${dishName}: ${description}. Christmas eve dinner atmosphere, elegant dark blue and gold table setting, warm lighting, 4k resolution, highly detailed, photorealistic.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
            aspectRatio: "4:3",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const imageUrl = `data:image/png;base64,${base64EncodeString}`;
            
            // Attempt to cache (local storage has size limits, handle gracefully)
            try {
                localStorage.setItem(cacheKey, imageUrl);
            } catch (e) {
                console.warn("Quota exceeded for localStorage image caching");
            }
            return imageUrl;
        }
    }
    
    return null;
  } catch (error) {
    console.error(`Failed to generate image for ${dishName}:`, error);
    return null;
  }
};