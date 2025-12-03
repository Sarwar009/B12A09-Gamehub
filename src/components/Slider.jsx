import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerSlider({slides = []}) {
  if (slides.length === 0) return <p>No slides found</p>;

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop
      autoplay={{delay: 3000}}
      pagination={{clickable: true}}
      navigation
    >
      {slides.map (s => (
        <SwiperSlide key={s.id}>
          <div className="relative w-full h-64 sm:h-100 md:h-[70vh]">
            <img
              src={s.coverPhoto}
              alt={s.title}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bottom-4 left-[10%] right-[10%] text-white bg-white/20 backdrop-blur-sm md:backdrop-blur-md rounded md:min-w-[400px] lg:min-w-[500px] p-2 md:p-6 text-center">
              <h3 className="text-sm md:text-2xl font-bold py-1">{s.title}</h3>
              <div className="flex flex-row md:flex-col justify-center gap-2">
                <p className="text-sm md:text-xl">
                  Ratings : <span className="text-red-500">{s.ratings}</span>
                </p>
                <p className="text-sm md:text-xl">
                  Category : <span className="text-red-500"> {s.category}</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
