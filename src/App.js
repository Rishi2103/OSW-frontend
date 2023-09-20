import React, { useEffect } from "react";
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  // useLocation,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import About from "./components/About";
import Partners from "./components/Partners";
import Blogs from "./components/Blogs";
import ResourceLibrary from "./components/ResourceLibrary/ResourceLibrary";
// import Footer from "./components/Footer";
import "./App.css";
// import Meetup from "./components/home-comp/Meetup";
import EventsPage from "./components/EventsPage";
import BlogPage from "./components/BlogPage";
import Team from "./components/Team";
// import teamProfile from "./components/Team/TeamProfile";
import Speakers from "./components/Speakers";
import Login from "./components/Login";
import { gapi } from "gapi-script";
import EventRegistrationForm from "./components/EventForm";
// import Forgotpassword from "./components/";
import TeamProfile from "./components/Team/TeamProfile";
import SpeakersProfile from "./components/Speakers/SpeakersProfile";
import ForgetPassword from "./components/forgotePassword";
import ContactForm from "./components/Contact Us Form/contactUsForm";
import ViewProfile from "./components/ViewProfile";
import User from "./components/Admin/User";
import AdminLogin from "./components/Admin/AdminLogin";
import ResourceLibraryProfile from "./components/ResourceLibrary/ResourceLibraryProfile";
import PersonalEvents from "./components/PersonalEvents";
import EventEditForm from "./components/EditEventForm.js";
import AddAdmin from "./components/Admin/AddAdmin";
// import EventEditForm from "./components/editEventForm";

const clientId =
  "574757039734-2hfvakv45d24o82mp3r80akqri2b70mq.apps.googleusercontent.com";

function App() {
  const authToken = localStorage.getItem("userAuthToken");
  const AdminauthToken = localStorage.getItem("adminAuthToken");
  // let selectedOption = "";
  const isUserAuthenticated = authToken !== null;
  const isAdminAuthenticated = AdminauthToken !== null;
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !isUserAuthenticated &&
      !isAdminAuthenticated &&
      window.location.pathname !== "/adminLogin"
    ) {
      navigate("/login", { replace: true });
    }
  }, [isUserAuthenticated, isAdminAuthenticated, navigate]);

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
        {isAdminAuthenticated && (
          <>
            <Route path="/admin/add-admin" element={<AddAdmin />} />
            <Route path="/admin/delete-user" element={<User />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/adminLogin" exact element={<AdminLogin />} />
        <Route path="/" element={<Home />} />
        {/* {(isUserAuthenticated || isAdminAuthenticated) && ( */}
        <>
          <Route path="/events" element={<Events />} />
          <Route path="/personal-events" element={<PersonalEvents />} />
          <Route
            path="/events/create-Event"
            element={<EventRegistrationForm />}
          />
          <Route path="/events/edit-Event/:id" element={<EventEditForm />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-member/details/:id" element={<TeamProfile />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/speaker/details/:id" element={<SpeakersProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resourceLibrary" element={<ResourceLibrary />} />
          <Route
            path="/projects-details"
            element={<ResourceLibraryProfile />}
          />
          <Route path="/event/details/:id" element={<EventsPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile" element={<ViewProfile />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/reset-password" element={<ForgetPassword />} />
          <Route path="/contact-us/send-message" element={<ContactForm />} />
          <Route path="/blogPage/:id" exact element={<BlogPage />} />
        </>
        {/* )} */}
      </Routes>
    </div>
  );
}

export default App;
