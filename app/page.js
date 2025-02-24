"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const title1 = "Hi!, I'm Yannawut";
  const title2 = "Welcome to my website";

  const sentences = [
    "Hi there! I'm Yannawut, a passionate Developer dedicated to creating efficient and innovative web solutions.",
    "With a love for technology and design, I strive to build user-friendly applications.",
    "Whether it's through coding, problem-solving, or collaborating, I aim to make a positive impact.",
    "Feel free to explore my portfolio, read my blog, or get in touch—I'd love to connect and collaborate!"
  ];

  const [titleText1, setTitleText1] = useState("");
  const [titleText2, setTitleText2] = useState("");
  const [text, setText] = useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTitleDone, setIsTitleDone] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false); // ✅ ใช้ตรวจสอบว่าพิมพ์เสร็จหมดแล้วหรือยัง

  // ฟังก์ชันพิมพ์ทีละตัวอักษร
  const typeText = (fullText, setTextState, callback) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTextState(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        if (callback) setTimeout(callback, 75);
      }
    }, 50);
  };

  // พิมพ์ Title 1
  useEffect(() => {
    typeText(title1, setTitleText1, () =>
      typeText(title2, setTitleText2, () => setIsTitleDone(true))
    );
  }, []);

  // พิมพ์ข้อความที่เหลือทีละตัวอักษร
  useEffect(() => {
    if (isTitleDone && currentSentenceIndex < sentences.length) {
      typeText(sentences[currentSentenceIndex], setCurrentText, () => {
        setText((prev) => [...prev, sentences[currentSentenceIndex]]);
        setCurrentText("");
        if (currentSentenceIndex + 1 === sentences.length) {
          setIsTypingDone(true); // ✅ บอกว่าพิมพ์เสร็จแล้ว
        } else {
          setCurrentSentenceIndex((prev) => prev + 1);
        }
      });
    }
  }, [currentSentenceIndex, isTitleDone]);

  // กระพริบเคอร์เซอร์
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 300);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center h-screen px-8 py-12 text-center">
      {/* พิมพ์ title1 */}
      <h1 className="text-6xl font-extrabold text-black leading-tight">
        Hi!, I'm <span className="text-primary">{titleText1.replace("Hi!, I'm ", "")}</span>
        {showCursor && titleText1.length < title1.length && <span className="text-primary">|</span>}
      </h1>

      {/* พิมพ์ title2 */}
      <h2 className="text-4xl font-semibold text-textDark mt-4">
        {titleText2}
        {showCursor && titleText1.length === title1.length && titleText2.length < title2.length && <span className="text-primary">|</span>}
      </h2>

      {/* แสดงเนื้อหาที่เหลือ */}
      <div className="mt-10 text-2xl text-gray-700 text-left space-y-4">
        {text.map((line, index) => (
          <p key={index} className="whitespace-nowrap">
            {line}
            {/* ✅ เคอร์เซอร์กระพริบที่ข้อความสุดท้าย โดยไม่เพิ่มบรรทัดใหม่ */}
            {index === text.length - 1 && isTypingDone && showCursor && <span className="text-primary">|</span>}
          </p>
        ))}
        {currentSentenceIndex < sentences.length && (
          <p className="whitespace-nowrap">
            {currentText}
            {showCursor && <span className="text-primary">|</span>}
          </p>
        )}
      </div>
    </div>
  );
}
