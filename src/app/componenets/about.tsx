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
          I’m <strong>Sana Khalid</strong>, a passionate web developer with hands-on experience in
          <strong> HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>, and modern frameworks like
          <strong> Next.js</strong> and <strong>Tailwind CSS</strong>. I love creating clean, responsive, and
          user-friendly web applications that work beautifully across all devices.
        </p>

        <p className="mb-4">
          I'm also skilled in <strong>Python</strong> and love building interactive apps using
          <strong> Streamlit</strong>. I've created tools like a Growth Mindset App, Library Manager, and Unit Converter
          using Python’s simplicity and power.
        </p>

        <p className="mb-4">
          I enjoy exploring <strong>Agentic AI</strong> — including tools like <strong>Chainlit</strong> — and working on projects
          with <strong>translator agents</strong>, <strong>multi-agent systems</strong>, and <strong>crypto tracking agents</strong> that
          showcase automation and AI-driven functionality.
        </p>

        <p className="mb-4">
          Collaboration and teamwork inspire me, and I always look forward to working on challenging ideas that push
          my creativity and technical skills further.
        </p>

        <p>
          Whether it’s reading tech blogs, improving UI/UX, or trying new frameworks — I’m a lifelong learner passionate
          about building meaningful digital solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
