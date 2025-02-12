import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary text-textDark px-6 py-10">
      
      {/* ส่วนที่ 1: รูปโปรไฟล์ + ชื่อ */}
      <div className="flex flex-col items-center">
        <Image 
          src="/profile.jpg" //  (ใส่ใน public/)
          alt="Profile Picture" 
          width={200} 
          height={300} 
          className="rounded-full border-4 border-primary shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4 text-textDark">Yannawut Roumsuk</h1>
        <p className="text-lg text-textDark mt-1">Devops | AI </p>
      </div>

      {/* ส่วนที่ 2: เกี่ยวกับฉัน */}
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-textDark">About me</h2>
        <p className="mt-1 text-lg">
        About MeMy name is Yannawut Roumsuk, born on July 30, 2002. I graduated from Naresuan University with a degree in Computer Engineering. 
        I am deeply passionate about pursuing a career as a Programmer, as I find it to be a dynamic, innovative, and forward-thinking profession. 
        My primary interests lie in DevOps and Artificial Intelligence (AI), fields that I am constantly exploring and learning more about. 
        I am committed to continuous growth and staying updated with the latest advancements in technology to further develop my skills and expertise.
        </p>
      </div>

      {/* ส่วนที่ 3: สิ่งที่สนใจ / Skills */}
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-textDark">My interesting</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="px-4 py-2 bg-primary text-textDark rounded-lg shadow">AI & Machine Learning</span>
          <span className="px-4 py-2 bg-primary text-textDark rounded-lg shadow">Web Development</span>
          <span className="px-4 py-2 bg-primary text-textDark rounded-lg shadow">Cloud Computing</span>
          <span className="px-4 py-2 bg-primary text-textDark rounded-lg shadow">Open Source Projects</span>
        </div>
      </div>
      
    </div>
  );
}
