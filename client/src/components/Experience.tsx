interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: 'شركة تقنية رائدة',
    position: 'مطورة واجهات أمامية',
    period: '2023 - الحاضر',
    description: 'تطوير واجهات مستخدم حديثة باستخدام React وتحسين تجربة المستخدم',
  },
  {
    company: 'مكتب تصميم رقمي',
    position: 'مطورة ويب',
    period: '2022 - 2023',
    description: 'بناء مواقع ويب متجاوبة وتطبيقات ويب باستخدام HTML و CSS و JavaScript',
  },
  {
    company: 'شركة ناشئة في مجال التكنولوجيا',
    position: 'مطورة ويب مبتدئة',
    period: '2021 - 2022',
    description: 'العمل على مشاريع ويب متنوعة وتطوير المهارات البرمجية',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white" style={{ direction: 'rtl' }}>
      <div className="container">
        <h2 className="section-title">خبراتي</h2>
        <div className="relative">
          {/* الخط الزمني */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0f3a7d] to-[#00bcd4]" style={{ right: '50%', transform: 'translateX(50%)' }}></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} data-aos="fade-in-up" className={`flex gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* الدائرة */}
                <div className="flex justify-center flex-shrink-0 w-12">
                  <div className="w-6 h-6 bg-[#00bcd4] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                </div>

                {/* المحتوى */}
                <div className="flex-1 card text-right">
                  <h3 className="text-xl font-bold text-[#0f3a7d] mb-1">{exp.position}</h3>
                  <p className="text-[#00bcd4] font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
