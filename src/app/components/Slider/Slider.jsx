import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { Swipeable } from 'react-touch';
import './Slider.css'

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const firstSlideIndex = 0
  const lastSlideIndex = images.length - 1

  const isFirstSlide = index => index === firstSlideIndex
  const isLastSlide = index => index === lastSlideIndex

  const prevSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true)
      const newIndex = isFirstSlide(currentIndex)
        ? lastSlideIndex
        : currentIndex - 1
      setCurrentIndex(newIndex)
      setTimeout(() => setIsButtonDisabled(false), 600)
    }
  }

  const nextSlide = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true)
      const newIndex = isLastSlide(currentIndex)
        ? firstSlideIndex
        : currentIndex + 1
      setCurrentIndex(newIndex)
      setTimeout(() => setIsButtonDisabled(false), 600)
    }
  }

  const handleSwipeLeft = () => {
    nextSlide()
  }

  const handleSwipeRight = () => {
    prevSlide()
  }

  return (
    <Swipeable onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
      <div className="h-[370px] w-full m-auto relative group cursor-pointer">
        <div
          style={{
            backgroundImage: `url(${images[currentIndex].src})`,
          }}
          className="bg-contain w-full h-[100%] bg-center bg-no-repeat duration-500"
        >
          <div className="group-hover:block absolute top-[50%] translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className=" group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </Swipeable>
  )
}

export default Slider