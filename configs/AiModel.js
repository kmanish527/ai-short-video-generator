const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"imagePrompt\": \"Realistic oil painting of a bustling Ottoman coffeehouse in 16th-century Istanbul. Men in turbans and kaftans are gathered around low tables, sipping coffee and playing backgammon. Smoke hangs in the air, illuminated by shafts of sunlight. Focus on the intricate details of the coffee sets and the architecture.\",\n    \"ContentText\": \"Narrator: (Warm, engaging tone) The year is 1555. Imagine yourself in Istanbul, the heart of the Ottoman Empire. A revolutionary new drink is sweeping the city: Coffee.\"\n  },\n  {\n    \"imagePrompt\": \"Close-up, hyper-realistic photograph of a steaming cup of Ottoman-style coffee, richly brewed and aromatic. Focus on the crema and the intricate patterns on the ceramic cup. Subtle lighting to emphasize the rich, dark color.\",\n    \"ContentText\": \"Narrator: Introduced by Syrian merchants, coffee, or 'kahve' as it was known, quickly captivated the Ottoman elite.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic digital painting of a lively debate unfolding in a coffeehouse. Scholars and intellectuals passionately discuss philosophy, politics, and literature, fueled by cups of coffee. The atmosphere is intense and intellectual.\",\n    \"ContentText\": \"Narrator: Coffeehouses became hubs for intellectual exchange. People gathered to discuss poetry, politics, and the news of the day.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic, historical depiction of Ottoman authorities, specifically a Kadi (judge) and soldiers, raiding a coffeehouse. They look stern and disapproving. People inside are looking worried and surprised. Strong contrast between light and shadow to emphasize the tension.\",\n    \"ContentText\": \"Narrator: But not everyone welcomed this new trend. Some religious leaders saw coffee as a dangerous intoxicant, a distraction from piety.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic painting of a coffee bean being burned on a fire during a period of coffee prohibition. Somber colors and a sense of loss and suppression.\",\n    \"ContentText\": \"Narrator: Bans were issued. Coffeehouses were shut down.  Coffee beans were burned in public squares.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic painting showcasing the interior of a clandestine coffeehouse operating in secret. People are huddled together, whispering and enjoying their coffee in hushed tones. Dim lighting and a sense of secrecy.\",\n    \"ContentText\": \"Narrator: Yet, the desire for coffee persisted. Secret coffeehouses sprung up, defying the authorities.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic painting of Sultan Murad III reluctantly drinking a cup of coffee, surrounded by his advisors.  He looks thoughtful and possibly conflicted. Opulent surroundings of the Ottoman court.\",\n    \"ContentText\": \"Narrator: Eventually, Sultan Murad III himself, swayed by its growing popularity and economic benefits, lifted the ban.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic panorama shot of numerous Ottoman coffeehouses thriving in Istanbul. A lively and colorful scene, demonstrating the widespread acceptance of coffee. Sunny day, showcasing the architecture and the energy of the city.\",\n    \"ContentText\": \"Narrator: Coffee, once controversial, became an integral part of Ottoman culture. And from there, it spread throughout the world, becoming the drink we know and love today.\"\n  },\n  {\n    \"imagePrompt\": \"Close-up, hyper-realistic photograph of coffee beans being roasted in a traditional Turkish coffee roaster. Focus on the rich, dark color of the beans and the intricate details of the roaster. Warm lighting to emphasize the aroma and the process.\",\n    \"ContentText\": \"(Visual remains, text disappears) A taste of history, in every cup.\"\n  }\n]\n```\n"},
        ],
      },
    ],
  });

  