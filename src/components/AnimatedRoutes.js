import { React } from "react";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SplashScreen from "../pages/SplashScreen";
import Signup from "../pages/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import EmailSignup from "./EmailSignup";
import EmailLogin from "./EmailLogin";
import Protected from "./Protected";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/landingpage" element={<LandingPage />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup:emailsignup" element={<EmailSignup />} />
        <Route path="/login:emaillogin" element={<EmailLogin />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
