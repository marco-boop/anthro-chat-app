"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        {messages.map((m) => (
          <div key={m.id} className="mb-4">
            <span
              className={`font-bold ${
                m.role === "user" ? "text-pink-500" : "text-cyan-500"
              }`}
            >
              {m.role === "user" ? "User: " : "AI: "}
            </span>
            <span>{m.content}</span>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            value={input}
            placeholder="Talk to char bort..."
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-pink-500"
          />
        </form>
      </div>
    </div>
  );
}
