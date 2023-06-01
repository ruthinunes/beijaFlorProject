import { useState } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { ScrollAnimationOnTrigger } from "../FrameMotion/FrameMotion";

export function CommentRating({ description, stars, authorName }) {
  const [rating, setRating] = useState(stars);

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="md:mt-0 flex flex-col gap-4">
      <img src="/imgs/aspas.png" width="20px" alt="" />

      <div className="w-full xl:w-[28vw] text-[1.7rem] xl:text-2xl mt-4 text-blackPink">
        <ScrollAnimationOnTrigger>
          <p>{description}</p>
        </ScrollAnimationOnTrigger>
      </div>
      {/* stars rating */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;
          const isFilled = ratingValue <= rating;
          return (
            <span key={i} className="drop-shadow-lg">
              {isFilled ? (
                <IoMdStar className="text-[pink]" size={37} />
              ) : (
                <IoMdStarOutline
                  className="text-gray-300 stroke-current stroke-6"
                  size={37}
                />
              )}
            </span>
          );
        })}
      </div>

      <div className="font-bold text-xl  text-[blue]">
        -
        <br />
        {authorName}
      </div>
    </div>
  );
}
