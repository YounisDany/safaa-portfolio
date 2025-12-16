import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" style={{ direction: 'rtl' }}>
      <div className="container">
        <h2 className="section-title">تواصل معي</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* نموذج التواصل */}
          <div data-aos="fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00bcd4] focus:outline-none transition-colors text-right"
                  placeholder="أدخل اسمك"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00bcd4] focus:outline-none transition-colors text-right"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الموضوع</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00bcd4] focus:outline-none transition-colors text-right"
                  placeholder="أدخل موضوع الرسالة"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#00bcd4] focus:outline-none transition-colors text-right"
                  placeholder="أدخل رسالتك"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                إرسال الرسالة
              </button>
              {submitted && (
                <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
                  تم إرسال رسالتك بنجاح! شكراً لتواصلك معي.
                </div>
              )}
            </form>
          </div>

          {/* معلومات التواصل والروابط الاجتماعية */}
          <div data-aos="fade-in-left" className="text-right">
            <h3 className="text-2xl font-bold text-[#0f3a7d] mb-6">معلومات التواصل</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 justify-end">
                <div>
                  <p className="font-semibold text-gray-700">البريد الإلكتروني</p>
                  <p className="text-gray-600">safaa@example.com</p>
                </div>
                <div className="w-12 h-12 bg-[#00bcd4]/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-[#00bcd4] text-lg"></i>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-end">
                <div>
                  <p className="font-semibold text-gray-700">الموقع</p>
                  <p className="text-gray-600">تعز – اليمن</p>
                </div>
                <div className="w-12 h-12 bg-[#00bcd4]/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-[#00bcd4] text-lg"></i>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0f3a7d] mb-4">تابعني على</h3>
            <div className="flex gap-4 justify-end flex-wrap">
              <a
                href="https://instagram.com/Safy.8620"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://t.me/Mthila_s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <i className="fab fa-telegram text-lg"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-l from-[#00bcd4] to-[#0f3a7d] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
