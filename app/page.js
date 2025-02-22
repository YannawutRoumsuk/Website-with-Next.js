export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start h-screen px-8 py-12 ">
      <h1 className="text-6xl font-extrabold text-textDark leading-tight animate-typing overflow-hidden whitespace-nowrap pr-4">
        Hi!, I'm <span className="text-primary">Yannawut</span>
      </h1>
      <h2 className="text-4xl font-semibold text-textDark mt-4 animate-typing-caret overflow-hidden whitespace-nowrap pr-4" style={{ animationDelay: '1s' }}>
        Welcome to my website
      </h2>
      <div className="mt-10 text-2xl text-gray-700 text-center space-y-4">
        <p className="animate-typing opacity-0 pr-4" style={{ animationDelay: '2s' }}>
          Hi there! I'm Yannawut, a passionate Developer dedicated to creating efficient and innovative web solutions.
        </p>
        <p className="animate-typing opacity-0 pr-4" style={{ animationDelay: '2s' }}>
          With a love for technology and design, I strive to build user-friendly applications.
        </p>
        <p className="animate-typing opacity-0 pr-4" style={{ animationDelay: '2s' }}>
          Whether it's through coding, problem-solving, or collaborating, I aim to make a positive impact.
        </p>
        <p className="animate-typing-caret opacity-0 pr-4" style={{ animationDelay: '2s' }}>
          Feel free to explore my portfolio, read my blog, or get in touch—I'd love to connect and collaborate!
        </p>
      </div>
    </div>
  );
}
