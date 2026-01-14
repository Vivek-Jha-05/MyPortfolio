import React, { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Particles } from "./magicui/particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import profile from "../assets/profile.png";
import resume from "../assets/Vivek-Jha-Resume.pdf";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      <div
        id="About"
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="mt-28 flex relative overflow-hidden vt323-regular items-center justify-around px-10 py-10 sm-mx:px-4 xs-mx:py-4 xs-mx:px-2 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 xs-mx:justify-between"
      >
        <Particles
          className="absolute inset-0 -z-20 h-full"
          quantity={1000}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div
          className="bs:ml-20 font-mono flex flex-col w-3/5 lg-mx:gap-3 bs-mx:items-center md-mx:w-full"
        >
          <div className="text-3xl text-primaryColor lg-mx:text-2xl xs-mx:text-xl xms-mx:text-lg">
            Hi, I am
          </div>
          <div className="text-white text-[4.25rem] font-bold font-mono lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xms-mx:text-[27px]">
            {Info.name}
          </div>
          <div
            className="
    flex flex-wrap items-center gap-2
    text-white
    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl
    xl:text-3xl
  "
          >
            <span>I'm a</span>

            <span
              className="
      text-primaryColor font-semibold
      whitespace-nowrap
      min-w-[8ch]
      sm:min-w-[10ch]
      md:min-w-[12ch]
    "
            >
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="text-textColor text-xl my-8 lg-mx:my-0 text-justify w-[90%] font-semibold font-mono lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
            {Info.bio}
          </div>
          <div className="flex gap-3">
            <Button
              onClick={open}
              size={btn}
              variant="filled"
              color="#64FFDA"
              className="!text-bgColor !w-fit"
            >
              Check Resume{" "}
            </Button>
            <Button
              size={btn}
              variant="outline"
              color="#64FFDA"
              className="!text-primaryColor !w-fit"
              rightSection={<IconDownload size={20} />}
              component="a"
              href={resume}
              download="Vivek_Jha_Resume.pdf"
            >
              {" "}
              Download{" "}
            </Button>
          </div>
        </div>
        <div
          className=" h-fit flex justify-center items-center w-fit bs:mr-14 rounded-full"
          id="photo"
        >
          <NeonGradientCard className="w-[325px] h-[325px] items-center justify-center text-center lg-mx:w-64 lg-mx:h-64 xms-mx:w-56 xms-mx:h-56">
            <img
              className="w-full h-full rounded-full "
              src={profile}
              alt="profile"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
