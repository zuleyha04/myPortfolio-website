import { useState, useEffect, useRef } from "react";
import { getBotResponse } from "../utils/getBotResponse";

export const ChatBox = ({ isOpen }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: "Merhaba! Züleyha hakkında merak ettiklerini yanıtlamaya hazırım!",
      },
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotResponse(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-xl w-full max-w-xl relative px-4 sm:px-6 mx-4">
        <h2 className="text-xl font-bold text-primary text-center mb-4">
          Züleyha hakkında ne öğrenmek istersin?
        </h2>

        <div className="h-64 overflow-y-auto flex flex-col gap-2 mb-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`px-3 py-2 rounded-md text-sm max-w-[80%] ${
                m.from === "user"
                  ? "bg-primary text-white self-end"
                  : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white self-start"
              }`}
            >
              {m.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-3 py-2 rounded-l-md border dark:bg-gray-800 dark:text-white"
            placeholder="Bir şey sor..."
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-primary text-white hover:bg-primary/80 rounded-r-md active:scale-90 transition-transform"
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};
