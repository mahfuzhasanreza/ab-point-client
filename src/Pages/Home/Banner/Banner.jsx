import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../../../assets/banner/banner-1.JPG';
import banner2 from '../../../assets/banner/banner-2.jpg';
import banner3 from '../../../assets/banner/banner-3.jpg';
import { useState } from 'react';
import Modal from 'react-modal';

const slides = [
  {
    id: 1,
    image: banner1,
    heading: 'Welcome to UIU CanSat',
    text: '',
    button: 'Join the Mission',
    href: '#join',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    image: banner2,
    heading: '', // Remove heading
    text: '', // Remove text
    button: 'Meet the Team',
    href: '#team',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    id: 3,
    image: banner3,
    heading: 'Join the Next Mission',
    text: '',
    button: 'Apply Now',
    href: '#apply',
    gradient: 'from-green-500 to-emerald-600',
  },
];

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full h-[90vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[90vh] w-full">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-20 text-center">
                <h1 className="secondary-font text-4xl md:text-6xl font-bold drop-shadow-xl animate-fadeInUp">
                  {slide.id === 1 ? (
                    <>
                      <span className="secondary-font block text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text  mb-2 tracking-tight drop-shadow-lg animate-fadeInUp">CanSat Competition 2024</span>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-6 animate-fadeInUp">
                        {/* 11th Worldwide */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 border-2 border-blue-300 shadow-lg">
                          <span className="text-3xl md:text-4xl font-extrabold text-blue-700 drop-shadow-sm">11<sup className='text-lg align-super'>th</sup></span>
                          <span className="text-base md:text-lg font-semibold text-blue-700">Worldwide</span>
                          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        </span>
                        {/* 3rd Asia */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 border-2 border-cyan-300 shadow-lg">
                          <span className="text-3xl md:text-4xl font-extrabold text-cyan-700 drop-shadow-sm">3<sup className='text-lg align-super'>rd</sup></span>
                          <span className="text-base md:text-lg font-semibold text-cyan-700">Asia</span>
                          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        </span>
                        {/* 1st Bangladesh */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-green-100 via-green-200 to-green-300 border-2 border-green-300 shadow-lg">
                          <span className="text-3xl md:text-4xl font-extrabold text-green-700 drop-shadow-sm">1<sup className='text-lg align-super'>st</sup></span>
                          <span className="text-base md:text-lg font-semibold text-green-700">Bangladesh</span>
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" /></svg>
                        </span>
                      </div>
                      <p className="mt-8 text-lg md:text-xl font-medium text-blue-100/90 bg-blue-900/30 rounded-xl px-6 py-3 shadow-lg max-w-2xl mx-auto border border-blue-200/30 backdrop-blur-md animate-fadeInUp">
                        Achieved remarkable success in the CanSat Competition 2024, ranking 11th worldwide, 3rd in Asia, and 1st in Bangladesh. Our dedication and teamwork set new standards for innovation.
                      </p>
                    </>
                  ) : slide.id === 2 ? (
                    <>
                      <span className="secondary-font block text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text  mb-2 tracking-tight drop-shadow-lg animate-fadeInUp">CanSat Competition 2025</span>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-6 animate-fadeInUp">
                        {/* 7th Worldwide */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 border-2 border-pink-300 shadow-lg">
                          <span className="text-3xl md:text-4xl font-extrabold text-pink-700 drop-shadow-sm">7<sup className='text-lg align-super'>th</sup></span>
                          <span className="text-base md:text-lg font-semibold text-pink-700">Worldwide</span>
                          <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        </span>
                        {/* 2nd Asia */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 border-2 border-yellow-300 shadow-lg">
                          <span className="text-3xl md:text-4xl font-extrabold text-yellow-700 drop-shadow-sm">2<sup className='text-lg align-super'>nd</sup></span>
                          <span className="text-base md:text-lg font-semibold text-yellow-700">Asia</span>
                          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        </span>
                        {/* 1st Bangladesh */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-green-100 via-green-200 to-green-300 border-2 border-green-300 shadow-lg">
                          <span className="text-3xl md:text-4xl font-extrabold text-green-700 drop-shadow-sm">1<sup className='text-lg align-super'>st</sup></span>
                          <span className="text-base md:text-lg font-semibold text-green-700">Bangladesh</span>
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" /></svg>
                        </span>
                      </div>
                      <p className="mt-8 text-lg md:text-xl font-medium text-pink-100/90 bg-pink-900/30 rounded-xl px-6 py-3 shadow-lg max-w-2xl mx-auto border border-pink-200/30 backdrop-blur-md animate-fadeInUp">
                        Celebrating our outstanding performance in CanSat Competition 2025: 7th worldwide, 2nd in Asia, and 1st in Bangladesh. Our relentless pursuit of excellence continues to inspire.
                      </p>
                    </>
                  ) : slide.id === 3 ? (
                    <>
                      <span className="secondary-font block text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 bg-clip-text  mb-2 tracking-tight drop-shadow-lg animate-fadeInUp">Rising Through the Ranks: Worldwide Achievements</span>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-6 animate-fadeInUp">
                        {/* 11th Worldwide in 2024 */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border-2 border-blue-300 shadow-lg">
                          <span className="text-2xl md:text-3xl font-extrabold text-blue-700 drop-shadow-sm">11<sup className='text-base align-super'>th</sup></span>
                          <span className="text-base md:text-lg font-semibold text-blue-700">Worldwide in 2024</span>
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        </span>
                        {/* 7th Worldwide in 2025 */}
                        <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 border-2 border-pink-300 shadow-lg">
                          <span className="text-2xl md:text-3xl font-extrabold text-pink-700 drop-shadow-sm">7<sup className='text-base align-super'>th</sup></span>
                          <span className="text-base md:text-lg font-semibold text-pink-700">Worldwide in 2025</span>
                          <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        </span>
                        {/* ? Worldwide in 2026 */}
                        <span className="relative flex items-center gap-3 px-7 py-4 rounded-3xl bg-gradient-to-br from-fuchsia-200 via-purple-300 to-blue-200 border-4 border-fuchsia-400 animate-pulse ring-4 ring-fuchsia-300/40 ring-offset-2 ring-offset-white">
                          <span className="text-4xl md:text-5xl font-extrabold text-fuchsia-700 drop-shadow-lg animate-bounce">?</span>
                          <span className="text-lg md:text-2xl font-bold text-fuchsia-700 tracking-wide animate-fadeInUp">Worldwide in 2026</span>
                          <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><circle cx="12" cy="16" r="1" /></svg>
                          
                        </span>
                      </div>
                      <p className="mt-8 text-lg md:text-xl font-medium text-green-100/90 bg-green-900/30 rounded-xl px-6 py-3 shadow-lg max-w-2xl mx-auto border border-green-200/30 backdrop-blur-md animate-fadeInUp">
                        Join us as we innovate for space and engineer with passion. Our relentless pursuit of excellence continues to inspire.
                      </p>
                    </>
                  ) : (
                    slide.heading
                  )}
                </h1>
                {/* Remove both action buttons and show description for other slides if needed */}
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Modal for YouTube Video */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Watch for Details Video"
        className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 z-[999]"
        overlayClassName="fixed inset-0 bg-black/60 z-[998]"
      >
        <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1eZ9H9aFC4k?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-3 right-3 bg-white/90 text-black px-3 py-1 rounded-full hover:bg-white transition-all"
          >
            ✕
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Banner;
