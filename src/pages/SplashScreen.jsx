import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import videoSplash from "../assets/0129.mp4";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.querySelector("video");

    const handleVideoEnd = () => {
      navigate("/landingpage");
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [navigate]);

  return (
    <motion.div
      initial={{x:"100%", }}
      animate={{ x: "0%", }}
      transition={{duration:0.05, ease: "easeInOut"}}
      exit={{opacity:1}}
      className="bg-black w-full h-full"
    >
      <video
        src={videoSplash}
        type="video/mp4"
        controls={false}
        muted
        autoPlay
        onEnded={() => navigate("/landingpage")}
        className="w-[95%] overflow-x-hidden  mx-auto lg:w-screen h-screen object-cover"
      />
    </motion.div>
  );
};

export default SplashScreen;
