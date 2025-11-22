"use client";

import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope,  } from "react-icons/fa";
import { PersonalInfo } from "@/backend/types";

const Footer = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setPersonalInfo(data.personalInfo))
      .catch(err => console.error('Failed to load personal info:', err));
  }, []);

  if (!personalInfo) {
    return null;
  }

  return (
    <footer className="border-t border-mycolor-200 text-center items-center justify-center">
      <div className="container  flex-center p-12 flex flex-col sm:flex-row gap-10 w-full sm:gap-5 text-2xl text-white text-center items-center justify-between">
      <span className="font-semibold font-pacifico ml-4">Hasan Emir Caglar</span>
        <div className="flex  flex-wrap  items-center gap-4">
          <a href={personalInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer">
            < FaEnvelope/>
          </a>
        </div>
        <span className="font-semibold text-center  text-sm ">All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
