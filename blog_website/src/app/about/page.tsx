export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2">Ahsan Paracha</h2>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
  
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:ahsanirfanparacha@gmail.com" className="text-blue-600 hover:underline">
                    ahsanirfanparacha@gmail.com
                  </a>
                </li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-semibold mb-4">About This Project</h3>
              <p className="text-gray-700 leading-relaxed">
                This blog website is developed as part of a Next.js assignment, showcasing modern web development 
                practices including dynamic routing, state management, and responsive design. Built with:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Next.js App Router</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>React Hooks</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }