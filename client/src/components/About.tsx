export default function About() {
  return (
    <section id="about" className="py-20 bg-white" style={{ direction: 'rtl' }}>
      <div className="container">
        <h2 className="section-title">عني</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-in-right">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <i className="fas fa-code text-6xl text-gray-400"></i>
            </div>
          </div>
          <div data-aos="fade-in-left" className="text-right">
            <h3 className="text-2xl font-bold text-[#0f3a7d] mb-4">مبرمجة ومطورة ويب احترافية</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              أنا صفاء البكاري، مبرمجة ومطورة واجهات أمامية من تعز – اليمن. لدي شغف عميق ببناء مواقع ويب حديثة وتجارب مستخدم سلسة باستخدام أحدث التقنيات والممارسات الاحترافية.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              أتمتع بخبرة في العمل مع تقنيات متعددة مثل React و JavaScript و CSS، وأسعى دائماً لتطوير مهاراتي والبقاء على اطلاع بأحدث الاتجاهات في مجال تطوير الويب.
            </p>
            <div className="flex flex-wrap gap-3 justify-end">
              <span className="px-4 py-2 bg-[#00bcd4]/20 text-[#0f3a7d] rounded-full font-medium">React</span>
              <span className="px-4 py-2 bg-[#00bcd4]/20 text-[#0f3a7d] rounded-full font-medium">JavaScript</span>
              <span className="px-4 py-2 bg-[#00bcd4]/20 text-[#0f3a7d] rounded-full font-medium">CSS</span>
              <span className="px-4 py-2 bg-[#00bcd4]/20 text-[#0f3a7d] rounded-full font-medium">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
