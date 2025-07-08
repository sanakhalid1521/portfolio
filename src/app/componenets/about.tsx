import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="p-8 font-normal justify-center bg-gradient-to-r from-black to-gray-800 text-gray-200"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        <p className="mb-4">
          I’m <strong>Sana Khalid</strong>, a passionate web developer focused on building visually appealing,
          user-friendly, and responsive web applications. My journey blends creativity with logic, helping
          me bring modern digital experiences to life.
        </p>

        <p className="mb-4">
          With a strong grasp of current web technologies and a commitment to clean code, I aim to exceed
          user expectations through smooth interfaces, mobile-friendly layouts, and intuitive navigation.
        </p>

        <p className="mb-4">
          I love working on challenging projects that push my skills and creativity forward. Collaborating
          with others energizes me — I believe teamwork is the key to innovative and successful solutions.
        </p>

        <p className="mb-4">
          As a lifelong learner, I’m always exploring new frameworks, tools, and best practices to stay
          current in this fast-paced industry.
        </p>

        <p>
          Whether it’s reading tech blogs, trying out new design patterns, or refining my UI/UX sense,
          I’m driven by a desire to create meaningful, modern applications that make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;
