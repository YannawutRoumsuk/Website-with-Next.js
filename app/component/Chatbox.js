"use client";
import { useState } from "react";

export default function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (!data.content || !Array.isArray(data.content) || data.content.length === 0) {
        throw new Error("Invalid API response");
      }

      const aiMessage = { role: "assistant", content: data.content[0].text };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching Claude response:", error);
      setMessages(prev => [...prev, { role: "error", content: "API Error" }]);
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-accent transition"
        >
          💬 Chat with AI
        </button>
      )}

      {isOpen && (
        <div className="w-100 h-96 bg-white shadow-lg rounded-lg flex flex-col font-mono">
          <div className="bg-primary text-white px-4 py-2 flex justify-between">
            <span>AI Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded-md ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100"}`}>
                {msg.content}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex font-mono">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-2 py-1 border rounded-md"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="ml-2 bg-primary text-white px-3 py-1 rounded-md">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
