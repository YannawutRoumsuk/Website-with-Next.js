"use client";
import { useState, useEffect, useRef } from "react";
import { Minus, Square, X, Copy } from "lucide-react"; // เปลี่ยนไอคอนให้เหมือน Windows
import { motion } from "framer-motion";

export default function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => setStartTime(Date.now()), 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  async function sendMessage() {
    if (!input.trim()) return;
    if (!startTime) setStartTime(Date.now());

    const userMessage = { role: "user", content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const aiMessage = { role: "assistant", content: data.content[0].text, timestamp: new Date() };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching Claude response:", error);
      setMessages((prev) => [...prev, { role: "error", content: "API Error" }]);
    }
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  // ปุ่มย่อหน้าจอ (Minimize)
  if (isMinimized) {
    return (
      <motion.div 
      className="fixed bottom-4 right-4 p-2 bg-primary text-white rounded-full cursor-pointer shadow-lg"
      onClick={() => setIsMinimized(false)}
      whileHover={{ scale: 1.2, y: -2 }} 
      transition={{ type: "spring", stiffness: 300 }}
      >
      💬 <span>Chat with Ai</span>
    </motion.div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 transition-all duration-300 ${
      isExpanded ? "w-full h-full p-4 bg-gray-200" : "w-96 h-[550px]"
    }`}>
      <div className="bg-white shadow-lg rounded-lg flex flex-col font-mono h-full">
        {/* Header */}
        <div className="bg-primary text-white px-4 py-2 flex justify-between items-center">
          <span>AI Chat</span>
          <div className="flex space-x-2">
            {/* ปุ่มย่อแชท */}
            <button onClick={() => setIsMinimized(true)}>
              <Minus size={20} />  {/* ใช้ไอคอน _ เหมือน Windows */}
            </button>
            {/* ปุ่มขยาย/คืนค่า */}
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <Copy size={20} /> : <Square size={20} />} {/* 🗖 / 🗗 */}
            </button>
            {/* ปุ่มปิดแชท */}
            <button onClick={() => setMessages([])}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Chat Content */}
        <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (<img src="/bot.png" alt="Bot" className="w-8 h-8 rounded-full" />)}
              <div className={`p-2 rounded-md ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100"}`}>
                <p className="whitespace-pre-line">{msg.content}</p>
                <span className="text-xs text-gray-500 block">{formatTimestamp(msg.timestamp)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-2 border-t flex font-mono">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-2 py-1 border rounded-md"
            placeholder="Type a message..."
          />
          <button onClick={sendMessage} className="ml-2 bg-primary text-white px-3 py-1 rounded-md">Send</button>
        </div>
      </div>
    </div>
  );
}
