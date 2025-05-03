import React from 'react';
import { ArrowRight, Map, Music, Navigation, Building } from 'lucide-react';

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-700">
      <div className="text-center mb-16">
        <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-6 font-medium">
          AI TRIP PLANNER
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600">
          AI-Powered Itineraries<br />
          Customized by You
        </h1>
        
        <p className="text-lg max-w-2xl mx-auto text-slate-600">
          Our AI trip planner will create a unique personalized 
          route for you. Forget about the problems of 
          travelers, we will do everything for you.
        </p>
        
        <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-white hover:text-orange-500 transition-colors">
          See Popular Itineraries
          <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Navigation size={24} className="text-black-400" />
            </div>
            <h3 className="text-xl font-medium text-slate-700">Personalized Itinerary Creation</h3>
          </div>
          <p className="text-slate-600">
            Let our AI travel experts craft your complete, personalized trip plan
          </p>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <div className="text-black-400">💬</div>
            </div>
            <h3 className="text-xl font-medium text-slate-700">Complimentary and Ad-Free</h3>
          </div>
          <p className="text-slate-600">
            Experience our services for free during Beta, no ads included or explore advanced features with our premium AI model.
          </p>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Navigation size={24} className="text-black-400 rotate-90" />
            </div>
            <h3 className="text-xl font-medium text-slate-700">Complete Customization</h3>
          </div>
          <p className="text-slate-600">
            Every aspect is fully customizable - tweak locations, add notes, and more
          </p>
        </div>
        
        {/* Feature 4 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Map size={24} className="text-black-400" />
            </div>
            <h3 className="text-xl font-medium text-slate-700">Integrated Itinerary and Map</h3>
          </div>
          <p className="text-slate-600">
            Access your travel plans and maps seamlessly in one place - no more juggling multiple apps and tabs
          </p>
        </div>
        
        {/* Feature 5 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Music size={24} className="text-black-400" />
            </div>
            <h3 className="text-xl font-medium text-slate-700">Music for Your Journey</h3>
          </div>
          <p className="text-slate-600">
            Each itinerary comes with a bespoke music selection to enhance your travel experience
          </p>
        </div>
        
        {/* Feature 6 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Building size={24} className="text-black-400" />
            </div>
            <h3 className="text-xl font-medium text-slate-700">Authentic Experiences Only</h3>
          </div>
          <p className="text-slate-600">
            Avoid the common tourist traps. Our AI selects only the most authentic and unique experiences for your journey
          </p>
        </div>
      </div>
    </div>
  );
}