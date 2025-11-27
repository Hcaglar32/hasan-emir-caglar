"use client";

import React from "react";
import { IconType } from "react-icons";
import { FiActivity, FiUsers, FiAward, FiClock } from "react-icons/fi";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Listachieve = [
  {
    metric: "Proje",
    value: "10",
    postfix: "+",
    icon: FiActivity,
  },
 
  {
    metric: "Bilinen dil ve framework",
    value: "9",
    icon: FiAward,
  },
  {
    metric: "Yıllık Tecrübe",
    value: "1",
    icon: FiClock,
  },
];
const Archive = () => {
  return (
    <div className="py-8 px-4 mt-0 md:mt-5 lg:mt-12 xl:gap-12">
      <div className="flex flex-col md:flex-row px-16 items-center justify-between py-6">
        {Listachieve.map((arc, index) => {
          const IconComponent = arc.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 md:my-0"
            >
              <div className="flex items-center justify-center">
                <IconComponent className="text-4xl mr-2 text-white" />
                <h2 className="text-white text-4xl font-semibold flex flex-row">
                  {arc.prefix}

                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={parseInt(arc.value)}
                    className="text-white text-4xl font-semibold"
                  />
                  <span className="ml-2">{arc.postfix}</span>
                </h2>
              </div>
              <p className="text-white text-base max-w-28 mt-2 text-center">{arc.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;
