export default function Projects() {
  return (
    <div className="text-center min-h-screen  py-16">
      {/* ส่วนหัวข้อหลัก */}
      <h1 className="text-5xl font-bold font-mono">Welcome to the visit of my projects</h1>
      <p className="mt-5 text-4xl text-textDark font-mono">
      These projects are self-studied and developed <br/> through my university education and internship experience.
      </p>
      <p className="mt-10 text-gray-700 max-w-2xl mx-auto">
      After completing these projects, I created this website to collect and showcase the details of each project, allowing visitors to explore my work.
      </p>
      
      {/* การ์ดแสดงโปรเจค */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        <ProjectCard
          title="Monitoring with Prometheus and Grafana"
          description="Monitoring with Prometheus and Grafana"
          image="/prom&graf.png"
        />
        <ProjectCard
          title="Line chatbots"
          description="Line chatbots"
          image="/chatbot.png"
        />
        <ProjectCard
          title="OCR Researcher Project"
          description="OCR Researcher Project"
          image="/ocr.png"
        />
      </div>

      {/* ส่วนท้ายของหน้า */}
      <div className="mt-16 bg-primary py-12 text-white w-full">
        <p className="text-lg"></p>
      </div>
    </div>
  );
}

// คอมโพเนนต์สำหรับการ์ด
function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
