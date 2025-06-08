import "./App.css";
// import react router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import CreateItinerary from "./pages/CreateItinerary";
import MyItineraries from "./pages/MyItineraries";
import SavedItineraries from "./pages/SavedItineraries";
import GenerateItinerary from "./pages/GenerateItinerary";
import Blogs from "./pages/Blogs";
import Destinations from "./pages/Destinations";

import AuthForm from "./pages/AuthForm";
import StaticGenerated from "./pages/StaticGenerated";
import MaharashtraFortsExplorer from "./pages/MahaForts";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import Terms from "./pages/Terms";


function App() {


  return (
    <>
      {/* React router */}
      <Router>

        {/* Header */}
        <Header />
        <Routes>
          {/* Add your routes here */}
          <Route path="/" element={()=>window.location.href = "/home"} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-itinerary" element={<CreateItinerary />} />
          <Route path="/my-itineraries" element={<MyItineraries />} />
          <Route path="/saved-itineraries" element={<SavedItineraries />} />
          <Route
            path="/generate-itinerary/:id"
            element={<GenerateItinerary />}
          />
          <Route path="/generate-itinerary" element={<StaticGenerated />} />

          <Route
            path="/destinations/:type"
            element={<MaharashtraFortsExplorer />}
          />
          <Route
            path="/destinations/:type/:id"
            element={<DestinationDetailPage />}
          />

          {/* <Route path="/destinations/beaches" element={} /> */}
          {/* <Route path="/generate-itinerary/:id" element={<GenerateItinerary />} /> */}

          {/* Add more routes as needed */}

          <Route path="/terms" element={<Terms />} />
          <Route path="/destinations" element={<Destinations />} />

          {/* <Route path="/hotels-search" element={<HotelsSearch />} /> */}
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
