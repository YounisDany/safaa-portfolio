import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 92 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'Python', percentage: 75 },
  { name: 'Git', percentage: 88 },
  { name: 'UI/UX', percentage: 82 },
];

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // بدء الحركة عند دخول القسم
          skillsData.forEach((skill) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.percentage,
              }));
            }, 100);
          });
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50" style={{ direction: 'rtl' }} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">مهاراتي</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((skill) => (
            <div key={skill.name} data-aos="fade-in-up" className="text-right">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-[#00bcd4] font-bold">
                  {animatedSkills[skill.name] || 0}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${animatedSkills[skill.name] || 0}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
