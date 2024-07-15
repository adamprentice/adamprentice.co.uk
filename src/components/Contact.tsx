"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-left" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-left" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-left" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
