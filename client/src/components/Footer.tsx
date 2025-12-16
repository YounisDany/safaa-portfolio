export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f3a7d] text-white py-12" style={{ direction: 'rtl' }}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* عن الموقع */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">عن الموقع</h3>
            <p className="text-gray-300 leading-relaxed">
              موقع شخصي احترافي يعرض مهارات وخبرات وأعمال المبرمجة صفاء البكاري من تعز، اليمن.
            </p>
          </div>

          {/* الروابط السريعة */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-[#00bcd4] transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-[#00bcd4] transition-colors">عني</a></li>
              <li><a href="#skills" className="hover:text-[#00bcd4] transition-colors">مهاراتي</a></li>
              <li><a href="#portfolio" className="hover:text-[#00bcd4] transition-colors">أعمالي</a></li>
              <li><a href="#contact" className="hover:text-[#00bcd4] transition-colors">تواصل</a></li>
            </ul>
          </div>

          {/* التواصل */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">تواصل</h3>
            <p className="text-gray-300 mb-2">البريد: safaa@example.com</p>
            <p className="text-gray-300 mb-4">الموقع: تعز – اليمن</p>
            <div className="flex gap-3 justify-end">
              <a href="https://instagram.com/Safy.8620" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00bcd4] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0f3a7d] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/Mthila_s" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00bcd4] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0f3a7d] transition-colors">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#00bcd4] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0f3a7d] transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* الفاصل */}
        <hr className="border-[#00bcd4]/30 my-8" />

        {/* حقوق النشر */}
        <div className="text-center text-gray-300">
          <p>جميع الحقوق محفوظة © {currentYear} المبرمجة صفاء البكاري</p>
          <p className="text-sm mt-2">تم تطويره بـ ❤️ من تعز، اليمن</p>
        </div>
      </div>
    </footer>
  );
}
