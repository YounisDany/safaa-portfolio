interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'شهادة React المتقدمة',
    organization: 'منصة Udemy',
    year: '2023',
  },
  {
    id: 2,
    title: 'شهادة تطوير الويب الشامل',
    organization: 'أكاديمية البرمجة',
    year: '2022',
  },
  {
    id: 3,
    title: 'شهادة JavaScript الأساسية',
    organization: 'منصة Coursera',
    year: '2021',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white" style={{ direction: 'rtl' }}>
      <div className="container">
        <h2 className="section-title">الشهادات</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="card text-center" data-aos="fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0f3a7d] mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.organization}</p>
              <p className="text-[#00bcd4] font-semibold mb-4">{cert.year}</p>
              <button className="btn btn-outline w-full">
                تحميل الشهادة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
