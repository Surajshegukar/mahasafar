import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyA5cpRmMvzqH6avojZ_l0858xyyxdbSvMY";


const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-thinking-exp-01-21",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: "text/plain",

  
};


export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "create a 7-day itinerary for a trip to the Scottish Highlands, including the best time to visit, budget tips, and a daily itinerary with activities and estimated costs. The trip should be suitable for 4 people and include outdoor activities, cultural experiences, and local cuisine. Provide details on accommodation options, transportation, and any necessary permits or reservations. Include a brief description of the Scottish Highlands and its attractions. Use JSON format for the response."
          },
      ],
    },
    {
      role: "model",
      parts: [
        {
          "text": "json\n{\n  \"tripTitle\": \"Adventure in the Scottish Highlands: A 7-Day Exploration\",\n  \"location\": \"Scottish Highlands, Scotland\",\n  \"geoCoordinates\": {\n    \"latitude\": 57.4778,\n    \"longitude\": -4.1475\n  },\n  \"description\": \"The Scottish Highlands are a breathtaking region of Scotland, renowned for their rugged mountains, deep lochs, and dramatic coastlines. This area offers unparalleled natural beauty and a rich cultural history, from ancient castles to whisky distilleries. The Highlands are a paradise for outdoor enthusiasts, with opportunities for hiking, climbing, kayaking, and wildlife spotting. Experience the magic of Scotland's iconic landscapes and immerse yourself in its unique heritage.\",\n  \"duration\": 7,\n  \"people\": 4,\n  \"budget\": \"Mid-Range\",\n  \"bestTimeToVisit\": {\n    \"month\": \"May to September\",\n    \"description\": \"The best time to visit the Scottish Highlands is from May to September. During these months, the weather is milder, with longer daylight hours and fewer midges (biting insects). July and August are the warmest months but also the busiest, so expect higher prices and more crowds. May, June, and September offer a good balance of pleasant weather and fewer tourists.\",\n    \"weather\": \"Mild temperatures, longer daylight hours, reduced rainfall compared to winter.\"\n  },\n  \"dailyItinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Arrival in Inverness & Loch Ness Exploration\",\n      \"description\": \"Arrive at Inverness Airport (INV) or by train. Pick up your rental car. Drive along the scenic Loch Ness, stopping at Urquhart Castle for stunning views. Consider a Loch Ness cruise for monster spotting. Check into your accommodation in Inverness or a nearby village.\",\n      \"activities\": [\n        \"Travel to Inverness\",\n        \"Explore Loch Ness\",\n        \"Visit Urquhart Castle\",\n        \"Optional: Loch Ness Cruise\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 120,\n        \"food\": 60,\n        \"activities\": 50,\n        \"transport\": 30\n      }\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Cairngorms National Park Hiking\",\n      \"description\": \"Head to Cairngorms National Park, the largest national park in the UK. Choose a hike based on your fitness level, such as a gentle walk around Loch Morlich or a more challenging climb up a Munro (mountain over 3,000 feet). Enjoy the stunning scenery and keep an eye out for wildlife.\",\n      \"activities\": [\n        \"Drive to Cairngorms National Park\",\n        \"Hiking (various trails available)\",\n        \"Wildlife spotting\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 0,\n        \"food\": 50,\n        \"activities\": 10,\n        \"transport\": 40\n      }\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Whisky Trail & Speyside\",\n      \"description\": \"Explore the famous Whisky Trail in Speyside. Visit several distilleries, such as Glenfiddich and Macallan, for tours and tastings. Enjoy a traditional Scottish lunch at a local pub. Consider staying overnight in a nearby village.\",\n      \"activities\": [\n        \"Visit distilleries\",\n        \"Whisky tastings\",\n        \"Lunch at a local pub\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 100,\n        \"food\": 70,\n        \"activities\": 60,\n        \"transport\": 50\n      }\n    },\n    {\n      \"day\": 4,\n      \"title\": \"Isle of Skye Adventure\",\n      \"description\": \"Drive to the Isle of Skye, known for its rugged landscapes and picturesque villages. Visit the Fairy Pools for a hike and stunning views. Explore Portree, the island's capital, and enjoy local seafood for dinner. Consider staying overnight on Skye.\",\n      \"activities\": [\n        \"Drive to Isle of Skye\",\n        \"Hike to Fairy Pools\",\n        \"Explore Portree\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 150,\n        \"food\": 80,\n        \"activities\": 20,\n        \"transport\": 60\n      }\n    },\n    {\n      \"day\": 5,\n      \"title\": \"Eilean Donan Castle & Glen Coe\",\n      \"description\": \"On your way back from Skye, stop at Eilean Donan Castle, one of Scotland's most iconic castles. Continue to Glen Coe for breathtaking scenery and hiking opportunities. Check into your accommodation in Fort William or nearby.\",\n      \"activities\": [\n        \"Visit Eilean Donan Castle\",\n        \"Explore Glen Coe\",\n        \"Hiking options\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 120,\n        \"food\": 70,\n        \"activities\": 30,\n        \"transport\": 50\n      }\n    },\n    {\n      \"day\": 6,\n      \"title\": \"Ben Nevis Climb\",\n      \"description\": \"Challenge yourself with a hike up Ben Nevis, the UK's highest peak. The hike takes about 7-8 hours round trip. Enjoy the stunning views from the summit. Return to Fort William for a well-deserved dinner and rest.\",\n      \"activities\": [\n        \"Climb Ben Nevis\",\n        \"Enjoy local cuisine in Fort William\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 0,\n        \"food\": 50,\n        \"activities\": 10,\n        \"transport\": 30\n      }\n    },\n    {\n      \"day\": 7,\n      \"title\": \"Return to Inverness & Departure\",\n      \"description\": \"Drive back to Inverness for your departure. If time allows, visit the Culloden Battlefield or Clava Cairns for a glimpse into Scotland's history. Drop off your rental car and head to the airport or train station.\",\n      \"activities\": [\n        \"Drive back to Inverness\",\n        \"Visit Culloden Battlefield or Clava Cairns\"\n      ],\n      \"estimatedCost\": {\n        \"accommodation\": 0,\n        \"food\": 40,\n        \"activities\": 20,\n        \"transport\": 30\n      }\n    }\n  ],\n  \"budgetTips\": [\n    \"Consider self-catering accommodation to save on food costs.\",\n    \"Pack your own snacks and drinks for hikes.\",\n    \"Take advantage of free activities like hiking and exploring natural attractions.\",\n    \"Look for deals on whisky distillery tours.\",\n    \"Travel during the shoulder season (May, June, September) for lower prices and fewer crowds.\",\n    \"Consider purchasing a Scotland Explorer Pass for discounted entry to attractions.\",\n    \"Book accommodations and rental cars in advance, especially during peak season.\",\n    \"Utilize public transportation where feasible, although a rental car is highly recommended for exploring the Highlands.\"\n  ],\n  \"notes\": \"This is a suggested itinerary and can be customized to your interests and preferences. Prices are estimates and may vary depending on the time of year and availability. Be sure to check opening hours and book tours in advance, especially during peak season. Remember to pack for all types of weather, as conditions in the Highlands can change rapidly.\"\n}"
        },
        
      ],
    },
  ],
});

