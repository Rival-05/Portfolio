// components/ContactForm.tsx
'use client';
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple frontend validation
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all the fields.");
      return;
    }

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[70%] sm:w-[50%] justify-between px-3 py-2 border-2 dark:border-zinc-700 border-zinc-200 trasition-all duration-300 hover:shadow-md rounded-md text-sm font-medium ">
      <h1 className="font-medium text-xl py-2 text-[#FFFFFF] text-center tracking-tighter">Work with me</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full py-1 px-2 border-2 outline-none rounded-lg border-zinc-700 focus:border-zinc-600 font-normal text-gray-300"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full py-1 px-2 border-2 outline-none rounded-lg border-zinc-700 focus:border-zinc-600 font-normal text-gray-300"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="min-h-20 resize-none overflow-hidden w-full py-1 px-2 border-2 outline-none rounded-lg border-zinc-700 focus:border-zinc-600 font-normal text-gray-300"
      ></textarea>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-gray-300 hover:text-gray-400 rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Send Message
      </button>

      {status && <p className="text-center text-sm text-red-500">{status}</p>}
    </form>
  );
}
