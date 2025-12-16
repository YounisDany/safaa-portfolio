import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'أحمد محمد',
    position: 'مدير مشروع',
    text: 'صفاء مطورة احترافية جداً، تتمتع بمهارات عالية في تطوير الواجهات الأمامية وتسليم المشاريع في الوقت المحدد.',
    rating: 5,
  },
  {
    id: 2,
    name: 'فاطمة علي',
    position: 'مديرة تصميم',
    text: 'التعاون مع صفاء كان رائعاً، فهمت رؤيتنا التصميمية وحولتها إلى واقع بشكل احترافي وسلس.',
    rating: 5,
  },
  {
    id: 3,
    name: 'محمود حسن',
    position: 'صاحب شركة ناشئة',
    text: 'صفاء ساعدتنا في بناء منصتنا الأولى بكفاءة عالية، وكانت دائماً متعاونة وملتزمة بالجودة.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-l from-[#00bcd4]/10 to-[#0f3a7d]/10" style={{ direction: 'rtl' }}>
      <div className="container">
        <h2 className="section-title">آراء العملاء</h2>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center" data-aos="fade-in-up">
            {/* النجوم */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-400"></i>
              ))}
            </div>

            {/* النص */}
            <p className="text-lg text-gray-700 mb-6 italic">"{current.text}"</p>

            {/* الاسم والمنصب */}
            <h3 className="text-xl font-bold text-[#0f3a7d] mb-1">{current.name}</h3>
            <p className="text-[#00bcd4] font-semibold mb-6">{current.position}</p>

            {/* الأزرار */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#0f3a7d] text-white hover:bg-[#00bcd4] transition-colors flex items-center justify-center"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="flex gap-2 items-center">
                {testimonialsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentIndex ? 'bg-[#00bcd4]' : 'bg-gray-300'
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#0f3a7d] text-white hover:bg-[#00bcd4] transition-colors flex items-center justify-center"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
