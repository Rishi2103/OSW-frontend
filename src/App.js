import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/Partners";
import Blogs from "./components/Blogs";
import ResourceLibrary from "./components/ResourceLibrary";
import Footer from "./components/Footer";
import "./App.css";
import Meetup from "./components/home-comp/Meetup";
import EventsPage from "./components/EventsPage";
import BlogPage from "./components/BlogPage";
import Team from "./components/Team";
import Speakers from "./components/Speakers";
import Login from "./components/Login";
import { gapi } from "gapi-script";
import EventRegistrationForm from "./components/EventForm";

const clientId =
  "574757039734-2hfvakv45d24o82mp3r80akqri2b70mq.apps.googleusercontent.com";

function App() {
  const location = useLocation();
  const [headerFooter, setHeaderFooter] = useState("visible");
  // if(window.location.href.includes("EventsPage"))
  // {
  //   setHeaderFooter("hidden")
  // }
  // Check if the current location is the EventsPage route

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/events/create-Event"
          element={<EventRegistrationForm />}
        />
        <Route path="/team" element={<Team />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resourceLibrary" element={<ResourceLibrary />} />
        {/* <Route path="/" exact element={<Meetup />} /> */}
        <Route path="/event/details/:id" element={<EventsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/blogPage/:id" exact element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
