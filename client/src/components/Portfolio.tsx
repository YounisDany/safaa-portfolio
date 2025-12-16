import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  fullDescription: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'نظام حجز',
    description: 'تطبيق ويب لحجز المواعيد والخدمات',
    technologies: ['React', 'Node.js', 'MongoDB'],
    fullDescription: 'نظام حجز متقدم يسمح للمستخدمين بحجز المواعيد بسهولة مع واجهة مستخدم حديثة وتجربة سلسة.',
  },
  {
    id: 2,
    title: 'منصة تعليمية',
    description: 'منصة تعليمية تفاعلية للدورات الأونلاين',
    technologies: ['React', 'Firebase', 'Tailwind'],
    fullDescription: 'منصة تعليمية شاملة توفر دورات تفاعلية وموارد تعليمية متنوعة للطلاب والمعلمين.',
  },
  {
    id: 3,
    title: 'موقع شركة تقنية',
    description: 'موقع احترافي لعرض خدمات الشركة',
    technologies: ['React', 'TypeScript', 'CSS'],
    fullDescription: 'موقع شركة احترافي يعرض خدمات الشركة والمشاريع السابقة مع تصميم عصري وحديث.',
  },
  {
    id: 4,
    title: 'لوحة تحكم إدارية',
    description: 'لوحة تحكم متقدمة لإدارة البيانات',
    technologies: ['React', 'Redux', 'Chart.js'],
    fullDescription: 'لوحة تحكم إدارية متقدمة توفر تحليلات شاملة وإدارة فعالة للبيانات والموارد.',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50" style={{ direction: 'rtl' }}>
      <div className="container">
        <h2 className="section-title">أعمالي</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="card cursor-pointer hover:shadow-2xl" data-aos="fade-in-up" onClick={() => setSelectedProject(project)}>
              <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                <i className="fas fa-project-diagram text-4xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0f3a7d] mb-2 text-right">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-right">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-end mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#00bcd4]/20 text-[#0f3a7d] rounded text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="btn btn-primary w-full text-center">
                عرض المشروع
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 text-right" onClick={(e) => e.stopPropagation()}>
            <button
              className="float-left text-2xl text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <h2 className="text-3xl font-bold text-[#0f3a7d] mb-4">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
            <div className="mb-6">
              <h3 className="font-bold text-[#0f3a7d] mb-2">التقنيات المستخدمة:</h3>
              <div className="flex flex-wrap gap-2 justify-end">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-[#00bcd4]/20 text-[#0f3a7d] rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button className="btn btn-primary w-full">
              زيارة المشروع
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
