import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen bg-secondary text-textDark px-6 py-16 gap-12">
      {/* Profile Section */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/3">
        <div className="relative w-48 h-48 lg:w-64 lg:h-64">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mt-6 whitespace-nowrap text-center lg:text-left ">Yannawut Roumsuk</h1>
        <p className="text-xl text-primary mt-2">DevOps Engineer | AI Enthusiast</p>
      </div>

      {/* Bio Section */}
      <div className="lg:w-2/3 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          My name is Yannawut Roumsuk, born on July 30, 2002. I graduated from Naresuan University with a degree in Computer Engineering. I have a strong passion for programming and technology, especially in the fields of DevOps and Artificial Intelligence. I thrive in environments that challenge me to learn and adapt, and I continuously seek opportunities to expand my knowledge and skills.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          With experience in CI/CD pipelines, container orchestration, and AI model deployment, I aim to build scalable and efficient solutions. My goal is to bridge the gap between development and operations, ensuring seamless delivery and robust performance in every project I undertake.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-3">Skills & Interests</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <span className="px-4 py-2 bg-primary text-white rounded-lg shadow">AI & Machine Learning</span>
            <span className="px-4 py-2 bg-primary text-white rounded-lg shadow">Web Development</span>
            <span className="px-4 py-2 bg-primary text-white rounded-lg shadow">Cloud Computing</span>
            <span className="px-4 py-2 bg-primary text-white rounded-lg shadow">DevOps & CI/CD</span>
            <span className="px-4 py-2 bg-primary text-white rounded-lg shadow">Docker & Kubernetes</span>
            <span className="px-4 py-2 bg-primary text-white rounded-lg shadow">Terraform & IaC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
