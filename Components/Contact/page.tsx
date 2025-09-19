import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Let&apos;s Connect</h1>
      <p className="text-gray-600 mb-6">
        You can reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          LinkedIn
        </a>
        , drop me an{" "}
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 font-semibold hover:underline"
        >
          Email
        </a>{" "}
        or check out my{" "}
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
