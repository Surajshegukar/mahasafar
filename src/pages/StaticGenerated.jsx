import { useState } from 'react';

export default function StaticGenerated() {
  // Parse the JSON data from the raw string
  const rawData = {
    "json": "{\"tripTitle\":\"Scottish Highlands Adventure: 7-Day Itinerary for 4\",\"location\":\"Scottish Highlands, Scotland\",\"geoCoordinates\":{\"latitude\":57.4778,\"longitude\":-4.1475},\"description\":\"Discover the majestic Scottish Highlands, a land of dramatic landscapes, ancient castles, and vibrant culture. This 7-day itinerary is designed for 4 people to experience the best of the Highlands, combining outdoor adventures, cultural immersion, and delicious local cuisine. Prepare to be captivated by stunning lochs, towering mountains, and the warm hospitality of the Scottish people.\",\"duration\":7,\"people\":4,\"budget\":\"Mid-Range\",\"bestTimeToVisit\":{\"month\":\"May to September\",\"description\":\"The ideal time to explore the Scottish Highlands is from May to September. These months offer the most favorable weather, with milder temperatures and longer daylight hours, perfect for outdoor activities. While July and August are the warmest, they are also the busiest and can have higher prices. May, June, and September provide a sweet spot with pleasant weather and fewer crowds. Be aware of midges, especially in June and July, and bring insect repellent.\",\"weather\":\"Mild and variable, with average temperatures ranging from 10-18°C (50-64°F). Expect sunshine, rain, and wind – sometimes all in one day!\"},\"accommodationOptions\":{\"types\":[\"Hotels\",\"Bed & Breakfasts (B&Bs)\",\"Self-Catering Cottages/Apartments\",\"Guesthouses\"],\"recommendations\":\"Consider a mix of B&Bs for local charm and self-catering cottages for more space and budget control, especially for a group of 4. Booking in advance is highly recommended, particularly during peak season. Look for accommodations in Inverness, Portree (Skye), Fort William, and Aviemore for strategic locations.\",\"estimatedCostPerNightFor4\":{\"midRange\":\"£150 - £300\"}},\"transportation\":{\"primaryMode\":\"Rental Car\",\"recommendations\":\"A rental car is highly recommended for exploring the Scottish Highlands, offering flexibility to reach remote areas and scenic viewpoints. Book in advance, especially if traveling during peak season, and consider an SUV for comfort and handling on varied terrain. Be prepared for single-track roads and driving on the left side of the road. Consider adding a designated driver within your group.\",\"alternativeOptions\":[\"Public Transport (limited in remote areas)\",\"Organized Tours (for specific regions or activities)\"],\"permitsReservations\":\"No specific permits are generally required for driving, but parking charges may apply at popular attractions and in towns. Ferry reservations to islands like Skye (though now bridged) or other islands are advisable, especially in peak season.\"},\"dailyItinerary\":[{\"day\":1,\"title\":\"Arrival in Inverness & Loch Ness Mystery\",\"description\":\"Arrive at Inverness Airport (INV) or by train. Collect your rental car and head to your accommodation in or near Inverness. Begin your Highland adventure with a trip to the legendary Loch Ness. Visit the Loch Ness Centre & Exhibition to delve into the Nessie mystery. Explore Urquhart Castle, perched dramatically on the loch's edge, offering stunning views and historical insights. Consider a scenic Loch Ness cruise for a different perspective and monster hunting opportunities. Enjoy dinner in Inverness, trying local Scottish dishes.\",\"activities\":[\"Arrive in Inverness & Pick up Rental Car\",\"Check into Accommodation\",\"Loch Ness Centre & Exhibition\",\"Urquhart Castle Visit\",\"Optional: Loch Ness Cruise (Jacobite Cruises recommended)\",\"Dinner in Inverness (try Rocpool Restaurant or The Mustard Seed)\"],\"estimatedCost\":{\"accommodation\":180,\"food\":80,\"activities\":120,\"transport\":40}},{\"day\":2,\"title\":\"Cairngorms National Park & Highland Wildlife\",\"description\":\"Drive to Cairngorms National Park, Britain's largest national park, offering diverse landscapes and wildlife. Start with a visit to the Highland Wildlife Park near Kingussie to see native Scottish animals and endangered species in a natural setting. Enjoy a scenic walk or hike around Loch Morlich, known for its sandy beach and watersports. For more adventurous hikers, consider a trail in the Rothiemurchus Forest. Have dinner in Aviemore, a hub for outdoor activities in the Cairngorms.\",\"activities\":[\"Drive to Cairngorms National Park (approx. 45 mins - 1 hour from Inverness)\",\"Highland Wildlife Park Visit\",\"Loch Morlich Walk/Hike & Watersports (optional)\",\"Rothiemurchus Forest Exploration (hiking/cycling)\",\"Dinner in Aviemore (try The Old Bridge Inn or Cairngorm Hotel)\"],\"estimatedCost\":{\"accommodation\":0,\"food\":70,\"activities\":100,\"transport\":50}},{\"day\":3,\"title\":\"Speyside Whisky Trail & Cooperage Craft\",\"description\":\"Immerse yourselves in the world of Scotch whisky on the Speyside Whisky Trail. Visit a renowned distillery like Glenfiddich or Macallan for a guided tour and tasting to learn about the whisky-making process from grain to glass. Explore the Speyside Cooperage to witness the traditional craft of barrel making. Enjoy lunch at a distillery or a local pub. In the afternoon, consider a scenic drive through Speyside, admiring the rolling hills and distilleries dotted across the landscape. Stay overnight in the Speyside area or return towards Inverness.\",\"activities\":[\"Drive to Speyside Whisky Region (approx. 1-1.5 hours from Aviemore)\",\"Glenfiddich or Macallan Distillery Tour & Tasting (book in advance)\",\"Speyside Cooperage Visit\",\"Lunch at a Distillery or Local Pub (try The Copper Dog at Craigellachie)\",\"Scenic Drive through Speyside\",\"Accommodation in Speyside or near Inverness\"],\"estimatedCost\":{\"accommodation\":180,\"food\":80,\"activities\":150,\"transport\":60}},{\"day\":4,\"title\":\"Eilean Donan Castle & Journey to Isle of Skye\",\"description\":\"Begin your journey towards the Isle of Skye, stopping at the iconic Eilean Donan Castle, spectacularly located at the meeting point of three lochs. Explore the castle, take photos, and learn about its history. Continue driving towards Skye, crossing the Skye Bridge. Check into your accommodation in Portree, the largest town on Skye, known for its colorful harbor. Explore Portree in the evening and enjoy fresh seafood for dinner.\",\"activities\":[\"Drive towards Isle of Skye (approx. 2-2.5 hours to Eilean Donan Castle from Speyside/Inverness)\",\"Eilean Donan Castle Visit\",\"Drive across Skye Bridge to Isle of Skye\",\"Check into Accommodation in Portree\",\"Explore Portree Harbor & Town\",\"Dinner in Portree (try Sea Breezes or The Old School Restaurant)\"],\"estimatedCost\":{\"accommodation\":220,\"food\":90,\"activities\":60,\"transport\":70}},{\"day\":5,\"title\":\"Isle of Skye: Fairy Pools & Dramatic Landscapes\",\"description\":\"Explore the magical Isle of Skye. Start with a hike to the Fairy Pools, crystal-clear pools at the foot of the Black Cuillin mountains, perfect for a refreshing (cold!) dip for the brave. Drive through the dramatic landscapes of the Trotternish Peninsula, stopping at the Old Man of Storr for a walk and panoramic views. Visit Kilt Rock and Mealt Falls, showcasing stunning coastal scenery. Enjoy dinner in a local Skye restaurant, savoring island flavors.\",\"activities\":[\"Fairy Pools Hike (park at Glenbrittle)\",\"Drive through Trotternish Peninsula\",\"Old Man of Storr Hike & Views\",\"Kilt Rock & Mealt Falls Viewpoint\",\"Dinner on Isle of Skye (try Scorrybreac Restaurant or Dulse & Brose)\"],\"estimatedCost\":{\"accommodation\":0,\"food\":80,\"activities\":30,\"transport\":40}},{\"day\":6,\"title\":\"Glen Coe's Majesty & Fort William\",\"description\":\"Depart from Skye and drive south towards Glen Coe, one of Scotland's most scenic glens, known for its dramatic mountains and tragic history. Stop at viewpoints to admire the stunning scenery and consider a short hike in Glen Coe. Continue to Fort William, the 'Outdoor Capital of the UK,' located at the foot of Ben Nevis. Explore Fort William town and enjoy dinner, perhaps trying some local game or seafood.\",\"activities\":[\"Drive from Isle of Skye to Glen Coe (approx. 2-2.5 hours)\",\"Glen Coe Scenic Drive & Viewpoints (Three Sisters viewpoint)\",\"Short Hike in Glen Coe (various trails)\",\"Drive to Fort William (approx. 30 mins from Glen Coe)\",\"Explore Fort William Town\",\"Dinner in Fort William (try Crannog Seafood Restaurant or Ben Nevis Inn)\"],\"estimatedCost\":{\"accommodation\":180,\"food\":90,\"activities\":40,\"transport\":60}},{\"day\":7,\"title\":\"Ben Nevis Foothills & Departure from Inverness\",\"description\":\"Spend the morning exploring the foothills of Ben Nevis, the UK's highest mountain. Visit the Nevis Range Mountain Resort for gondola rides with panoramic views (weather permitting) or enjoy a walk in the lower Nevis Gorge. Alternatively, visit the West Highland Museum in Fort William to learn about local history and culture. Drive back to Inverness Airport (INV) or train station for your departure. Consider a final Scottish breakfast before heading home.\",\"activities\":[\"Explore Ben Nevis Foothills (Nevis Range Gondola or Nevis Gorge Walk)\",\"Optional: West Highland Museum in Fort William\",\"Drive back to Inverness (approx. 2 hours from Fort William)\",\"Depart from Inverness Airport (INV) or Train Station\"],\"estimatedCost\":{\"accommodation\":0,\"food\":60,\"activities\":50,\"transport\":40}}],\"budgetTips\":[\"Self-Catering Savings: Opt for self-catering accommodations for some nights to prepare your own meals and reduce dining costs.\",\"Packed Lunches & Snacks: Prepare packed lunches and snacks for hiking days to avoid expensive tourist cafes.\",\"Free Activities Abound: Hiking, scenic drives, and exploring natural attractions are free – maximize these!\",\"Distillery Tour Deals: Look for online deals or combined tour packages for whisky distilleries.\",\"Shoulder Season Travel: Visiting in May, June, or September offers better deals and fewer crowds compared to peak summer.\",\"Scotland Explorer Pass: If planning to visit many paid attractions, consider a Scotland Explorer Pass for potential savings.\",\"Book Ahead: Secure accommodations and rental cars in advance, especially for peak season, to get better rates.\",\"Pub Meals: Enjoy more affordable and hearty meals at local pubs for lunch and dinner.\",\"Free Parking Research: Look for free parking options where available, as parking charges can add up.\",\"Water Refills: Carry reusable water bottles and refill them to save on bottled water costs.\"],\"localCuisineRecommendations\":[\"Haggis, Neeps and Tatties: Scotland's national dish – a savory pudding, turnips, and potatoes.\",\"Scottish Salmon: Fresh and delicious, often grilled, smoked, or pan-fried.\",\"Seafood: Especially on the coast and islands, try Cullen Skink (smoked haddock soup), fresh mussels, and oysters.\",\"Scotch Broth: A hearty and warming soup with meat and vegetables.\",\"Stovies: A filling potato-based dish with meat and onions.\",\"Full Scottish Breakfast: A substantial breakfast including eggs, bacon, sausage, beans, black pudding, and more.\",\"Tablet: A sweet, crumbly fudge-like confection.\",\"Shortbread: A classic buttery biscuit.\",\"Whisky: Sample local single malt whiskies from the Speyside region and beyond.\"],\"notes\":\"This itinerary is a suggestion and can be tailored to your group's interests and fitness levels. Estimated costs are approximate for 4 people per day and are in GBP (£). Actual prices may vary based on season, availability, and booking times. It is highly recommended to book accommodations, tours, and car rental in advance, especially during peak season. Check the opening times and booking requirements for all attractions beforehand. Pack for all types of weather, including layers, waterproof jackets, and comfortable walking shoes. Be aware of midges, particularly during summer months, and bring insect repellent. Enjoy your adventure in the magnificent Scottish Highlands!\"}"
  };



  const tripData = (JSON.parse(rawData.json));
  const [activeDay, setActiveDay] = useState(0);

  // Calculate total estimated cost
  const calculateTotalCost = () => {
    return tripData.dailyItinerary.reduce((total, day) => {
      return total + day.estimatedCost.accommodation + 
             day.estimatedCost.food + 
             day.estimatedCost.activities + 
             day.estimatedCost.transport;
    }, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-600">Home</a>
          <span className="text-gray-400">&gt;</span>
          <a href="#" className="text-gray-600">Explore Scotland</a>
          <span className="text-gray-400">&gt;</span>
          <a href="#" className="text-gray-600">Trips</a>
          <span className="text-gray-400">&gt;</span>
          <span className="text-orange-500">{tripData.tripTitle.split(':')[0]}</span>
        </div>
      </nav>

      {/* Main Title Section */}
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-orange-500">{tripData.tripTitle}</h1>
        <p className="text-gray-600">{tripData.location}</p>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto relative rounded-lg overflow-hidden mb-8">
        <div className="h-96 bg-gray-200 relative">
          <img 
            src="/api/placeholder/1200/500" 
            alt="Scottish Highlands Landscape" 
            className="w-full h-full object-cover"
          />
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-700 mb-4">{tripData.description}</p>
        <p className="text-gray-700">This 7-day itinerary is designed to showcase the best of the Scottish Highlands, from the mystical Loch Ness to the dramatic landscapes of Skye and the majestic Glen Coe.</p>
      </div>

      {/* Trip Details */}
      <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-12 px-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <div>
              <h3 className="font-bold">Duration</h3>
              <p className="text-gray-600">{tripData.duration} days</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div>
              <h3 className="font-bold">Group Size</h3>
              <p className="text-gray-600">{tripData.people} people</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
            </div>
            <div>
              <h3 className="font-bold">Best Time to Visit</h3>
              <p className="text-gray-600">{tripData.bestTimeToVisit.month}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div>
              <h3 className="font-bold">Budget</h3>
              <p className="text-gray-600">{tripData.budget} (£{calculateTotalCost()} total)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold mb-2">Key Pointers</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 12h-6"></path></svg>
            </div>
            <div>
              <p className="text-gray-700">Typical Weather: {tripData.bestTimeToVisit.weather}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div>
              <p className="text-gray-700">Transportation: {tripData.transportation.primaryMode}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Itinerary */}
      <div className="container mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Daily Itinerary</h2>
        
        <div className="flex flex-nowrap overflow-x-auto gap-4 mb-6 pb-2">
          {tripData.dailyItinerary.map((day, index) => (
            <button
              key={index}
              className={`flex-shrink-0 px-6 py-3 rounded-full ${activeDay === index ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveDay(index)}
            >
              Day {day.day}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">{tripData.dailyItinerary[activeDay].title}</h3>
          
          <p className="text-gray-700 mb-6">{tripData.dailyItinerary[activeDay].description}</p>
          
          <div className="mb-6">
            <h4 className="font-bold mb-2">Activities</h4>
            <ul className="space-y-2">
              {tripData.dailyItinerary[activeDay].activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 bg-orange-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Accommodation</p>
              <p className="font-bold">£{tripData.dailyItinerary[activeDay].estimatedCost.accommodation}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Food</p>
              <p className="font-bold">£{tripData.dailyItinerary[activeDay].estimatedCost.food}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Activities</p>
              <p className="font-bold">£{tripData.dailyItinerary[activeDay].estimatedCost.activities}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Transport</p>
              <p className="font-bold">£{tripData.dailyItinerary[activeDay].estimatedCost.transport}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Tips */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 mb-12 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Budget Tips</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              {tripData.budgetTips.slice(0, 5).map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 bg-orange-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Local Cuisine */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Local Cuisine</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-3">
              {tripData.localCuisineRecommendations.slice(0, 5).map((cuisine, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 bg-orange-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                  </div>
                  <span className="text-gray-700">{cuisine}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Accommodation & Transportation */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 mb-12 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">{tripData.accommodationOptions.recommendations}</p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Recommended Types:</h3>
              <div className="flex flex-wrap gap-2">
                {tripData.accommodationOptions.types.map((type, index) => (
                  <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">{type}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Estimated Cost per Night:</h3>
              <p className="text-gray-700">{tripData.accommodationOptions.estimatedCostPerNightFor4.midRange}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">{tripData.transportation.recommendations}</p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Alternative Options:</h3>
              <div className="flex flex-wrap gap-2">
                {tripData.transportation.alternativeOptions.map((option, index) => (
                  <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">{option}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Permits & Reservations:</h3>
              <p className="text-gray-700">{tripData.transportation.permitsReservations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="container mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Additional Notes</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700">{tripData.notes}</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto mb-12 px-4 text-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md">
          BOOK THIS TRIP
        </button>
      </div>

      {/* Explore Nearby */}
      <div className="bg-orange-500 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Explore Nearby</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/api/placeholder/200/150" alt="Nearby location" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-bold">Loch Lomond</h3>
              <p className="text-sm text-gray-600">1-day trip</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/api/placeholder/200/150" alt="Nearby location" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-bold">Edinburgh</h3>
              <p className="text-sm text-gray-600">2-day trip</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/api/placeholder/200/150" alt="Nearby location" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-bold">Orkney Islands</h3>
              <p className="text-sm text-gray-600">3-day trip</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/api/placeholder/200/150" alt="Nearby location" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-bold">Isle of Mull</h3>
              <p className="text-sm text-gray-600">2-day trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}