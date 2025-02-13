import { useState } from "react";

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const res = await fetch("https://api.deepseek.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat", 
          messages: [...messages, userMessage],
        }),
      });

      const data = await res.json();
      setMessages([...messages, userMessage, { role: "bot", content: data.choices[0].message.content }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-accent transition"
        >
          💬 Chat with AI
        </button>
      )}

      {/* Chatbox Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white px-4 py-2 flex justify-between">
            <span>AI Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100"}`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-2 py-1 border rounded-md"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-primary text-white px-3 py-1 rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
