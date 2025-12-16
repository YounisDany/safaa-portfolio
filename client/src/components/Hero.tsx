export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-l from-[#00bcd4]/10 to-[#0f3a7d]/10" style={{ direction: 'rtl' }}>
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* المحتوى */}
          <div className="flex-1 text-right" data-aos="fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0f3a7d] mb-4">
              مرحباً، أنا صفاء البكاري
            </h1>
            <p className="text-xl text-gray-600 mb-2">مبرمجة ومطوّرة واجهات أمامية</p>
            <p className="text-lg text-gray-500 mb-6">من تعز – اليمن</p>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              مبرمجة ومطوّرة واجهات أمامية من تعز – اليمن، شغوفة ببناء مواقع ويب حديثة وتجارب مستخدم سلسة باستخدام أحدث التقنيات.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <button className="btn btn-primary">
                استكشف أعمالي
              </button>
              <button className="btn btn-outline">
                تواصل معي
              </button>
            </div>
          </div>

          {/* الصورة الشخصية */}
          <div className="flex-1 flex justify-center" data-aos="fade-in-left">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#0f3a7d] to-[#00bcd4] rounded-3xl transform -rotate-6 opacity-50"></div>
              <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="/avatar-safaa.png" alt="صفاء البكاري" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
