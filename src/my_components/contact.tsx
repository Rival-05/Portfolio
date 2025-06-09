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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[70%] sm:w-[50%] justify-between px-3 py-2 border dark:border-2 border-zinc-700 trasition-all duration-300 hover:shadow-md rounded-md text-sm font-medium ">
      <h1 className="font-medium text-xl py-2 dark:text-[#FFFFFF] text-[#000000] text-center cursor-default tracking-tighter">Hang-out with me</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full py-1 px-2 border dark:border-2 outline-none rounded-lg border-zinc-700 focus:border-zinc-600 font-normal dark:text-gray-200 text-[#000000]"
      />

      <input
        type="email"
        name="email"
        placeholder=" Slide your e-mail"
        value={form.email}
        onChange={handleChange}
        className="w-full py-1 px-2 border dark:border-2 outline-none rounded-lg border-zinc-700 focus:border-zinc-600 font-normal dark:text-gray-200 text-[#000000]"
      />

      <textarea
        name="message"
        placeholder="Drop your idea like a pro..."
        value={form.message}
        onChange={handleChange}
        className="min-h-20 resize-none overflow-hidden w-full py-1 px-2 border dark:border-2 outline-none rounded-lg border-zinc-700 focus:border-zinc-600 font-normal dark:text-gray-200 text-[#000000]"
      ></textarea>

      <button
        type="submit"
        className="w-full py-2 dark:bg-blue-600 bg-blue-500 dark:text-gray-300 text-gray-800 hover:text-gray-900 hover:bg-blue-600 dark:hover:text-gray-100 rounded-lg dark:hover:bg-blue-700 transition-all duration-300"
      >
        Ship It ⚡
      </button>

      {status && <p className="text-center text-sm text-red-500">{status}</p>}
    </form>
  );
}
