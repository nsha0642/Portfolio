import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import "./AskMe.css";
import { useSectionReveal } from "../../utils/animations";

const AskMe = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm Nishanth's AI agent. Ask me anything about my education, skills, and experience, and I'll answer strictly based on my resume.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = React.useRef(null);
  useSectionReveal(sectionRef, { targets: ".askme-card" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setError("");
    setLoading(true);

    const nextMessages = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");

    try {
      console.log("📤 Sending question to backend:", question);
      
      const response = await fetch("/api/ask-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      console.log("📥 Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Backend error:", response.status, errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Data received:", data);
      
      const answer = data?.answer;
      
      if (!answer) {
        throw new Error("No answer received from server");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch (err) {
      console.error("❌ Error:", err.message);
      setError(`Error: ${err.message}`);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I encountered an issue while processing your question. Make sure the backend is running at http://127.0.0.1:8000",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask-me" className="askme-section" ref={sectionRef}>
      <div className="floating-background">
        <div className="circle small"></div>
        <div className="circle medium"></div>
        <div className="circle large"></div>
      </div>

      <div className="container askme-container askme-card">
        <h2 className="section-title">Ask Me</h2>
        <p className="askme-subtitle">
          Chat with an AI agent that knows my experience, skills, and work history powered only
          by my resume.
        </p>

        <div className="askme-chat">
          <div className="askme-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`askme-message askme-message-${msg.role === "user" ? "user" : "assistant"
                  }`}
              >
                <div className="askme-bubble">{msg.content}</div>
              </div>
            ))}
            {loading && (
              <div className="askme-message askme-message-assistant">
                <div className="askme-bubble askme-bubble-loading">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>

          {error && <p className="askme-error">{error}</p>}

          <form className="askme-form" onSubmit={handleSubmit}>
            <textarea
              className="askme-input"
              rows={2}
              placeholder="Ask about my work at Infosys, my projects, education, or skills…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <motion.button
              type="submit"
              className="askme-send-btn"
              disabled={loading || !input.trim()}
              whileHover={!loading && input.trim() ? { scale: 1.05 } : {}}
              whileTap={!loading && input.trim() ? { scale: 0.96 } : {}}
            >
              <PaperAirplaneIcon width={20} height={20} />
              <span>{loading ? "Sending..." : "Send"}</span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AskMe;
