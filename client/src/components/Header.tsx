import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'عني', href: '#about' },
    { label: 'مهاراتي', href: '#skills' },
    { label: 'خبراتي', href: '#experience' },
    { label: 'أعمالي', href: '#portfolio' },
    { label: 'الشهادات', href: '#certificates' },
    { label: 'تواصل', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" style={{ direction: 'rtl' }}>
      <div className="container flex items-center justify-between h-20">
        {/* الشعار */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">ص</span>
          </div>
          <h1 className="text-xl font-bold text-[#0f3a7d] hidden sm:block">صفاء البكاري</h1>
        </div>

        {/* قائمة التنقل - Desktop */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-700 hover:text-[#00bcd4] font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* زر تحميل السيرة الذاتية */}
        <a
          href="#"
          className="hidden sm:inline-block btn btn-primary text-sm"
          onClick={(e) => {
            e.preventDefault();
            alert('تم تحميل السيرة الذاتية');
          }}
        >
          تحميل السيرة
        </a>

        {/* زر القائمة - Mobile */}
        <button
          className="lg:hidden text-2xl text-[#0f3a7d]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* قائمة Mobile */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-50 border-t border-gray-200" style={{ direction: 'rtl' }}>
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-right text-gray-700 hover:text-[#00bcd4] font-medium py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#"
              className="btn btn-primary text-center mt-2"
              onClick={(e) => {
                e.preventDefault();
                alert('تم تحميل السيرة الذاتية');
              }}
            >
              تحميل السيرة الذاتية
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
