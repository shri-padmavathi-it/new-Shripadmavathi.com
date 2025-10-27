"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import Image1 from "/public/img5.jpg"
import Image2 from "/public/img2.png"
import Image3 from "/public/img3.jpg"
import Image4 from "/public/img4.jpg"
import Image5 from "/public/img1.jpg"
import Image6 from "/public/img6.jpg"

const images = [Image1, Image2, Image3, Image4, Image5, Image6]

export default function ImageCarousel() {
  return (
    <section className="relative w-full pt-2 px-4 overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-400 !opacity-50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-orange-500 !opacity-100",
        }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-[65vh] border border-gray-200 rounded-lg shadow-sm"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
           <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              objectFit="cover"
              priority={index < 2}
              quality={100}
              sizes="100vw"
              className="object-cover w-full h-full rounded-lg"
              unoptimized
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Optional: Add navigation arrows with your color scheme */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #9ca3af !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #f97316 !important;
          opacity: 1 !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6 !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #f97316 !important;
        }
      `}</style>
    </section>
  )
}