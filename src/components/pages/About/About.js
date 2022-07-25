import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I am a Cloud Application Architect with 10 years' experience in
              software engineering with a strong passion in architecting and
              developing solutions on AWS.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I have experience in the implementation and delivery of cloud
              native applications. I worked on multiple cloud platforms (i.e.,
              Amazon Web Services, Microsoft Azure, and SAP Business Technology
              Platform), and have developed multiple cloud and web applications
              using different frameworks (i.e., NodeJS, .NET, Spring Boot). I
              have profound experience applying software engineering
              methodologies, such as agile development, cloud native
              development, DevOps, SRE, release management, requirement
              engineering, software architecture, software testing, and software
              project management.
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I obtained two professional level AWS certifications, two
              specialty AWS certifications, two associate level AWS
              certifications, and a Project Management Professional (PMP)
              certification.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
