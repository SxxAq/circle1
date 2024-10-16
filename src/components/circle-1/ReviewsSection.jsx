import React from 'react';
import avatar1 from '../../assets/54.png';
import avatar2 from '../../assets/55.png';
import avatar3 from '../../assets/56.png';

function ReviewsSection() {
  const reviews = [
    {
      name: "Radha",
      date: "15th April 2024",
      rating: 3,
      title: "Value for Money",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum has been the Lorem Ipsum is simply dummy.",
      avatar: avatar1
    },
    {
      name: "Krishna",
      date: "15th April 2024",
      rating: 3,
      title: "Best Battery Life",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum has been the Lorem Ipsum is simply dummy.",
      avatar: avatar2
    },
    {
      name: "Soha Ali Khan",
      date: "8th Aug 2023",
      rating: 3,
      title: "Professional Camera",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum has been the Lorem Ipsum is simply dummy.",
      avatar: avatar3
    }
  ];

  return (
    <section className="flex flex-col items-center self-center mt-32 max-w-full text-stone-900 w-[1280px] max-md:mt-10">
      <h2 className="text-4xl font-medium tracking-tighter leading-tight text-stone-900">Top Reviews</h2>
      <div className="flex flex-col items-center mt-9 w-full">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col p-6 mt-8 max-w-full rounded-2xl w-[842px] max-md:px-5">
            <div className="flex flex-wrap gap-2.5 items-center w-full max-md:max-w-full">
              <div className="flex shrink-0 self-stretch my-auto w-12 h-12 rounded-full">
                <img src={review.avatar} alt={`${review.name}'s avatar`} className="object-cover rounded-full w-12 h-12" />
              </div>
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-xl font-medium tracking-normal leading-tight text-stone-900">{review.name}</div>
                <div className="gap-1 self-stretch mt-1 text-xs tracking-wide leading-relaxed text-stone-500">{review.date}</div>
              </div>
            </div>
            <div className="flex flex-col mt-6 w-full max-md:max-w-full">
              <div className="flex gap-6 items-center self-start">
                <div className="flex gap-1 items-start self-stretch my-auto">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      loading="lazy"
                      src={i < review.rating
                        ? "https://cdn.builder.io/api/v1/image/assets/TEMP/9e228c1c810647524b745101ed452e5e2dec1457cbbde3d3d36412b7f532925c?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
                        : "https://cdn.builder.io/api/v1/image/assets/TEMP/1072b6bb0e04f0b5a258d402eb0859c5781c5bf8f836292a963767f454d72bab?apiKey=95b7b2aa9950440b926ba3614b9a318a&"}
                      className="object-contain shrink-0 w-4 aspect-square"
                      alt=""
                    />
                  ))}
                </div>
                <div className="self-stretch my-auto text-base leading-relaxed text-neutral-800">{review.title}</div>
              </div>
              <p className="mt-3 text-sm tracking-normal leading-6 opacity-80 text-stone-500 max-md:max-w-full">
                {review.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="flex flex-col justify-center items-start py-0.5 mt-9 text-base font-medium tracking-tight leading-tight text-center text-neutral-900 w-[93px]">
        <div className="flex gap-1 items-start max-md:mr-0">
          <span>Read More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e122f681df43b818b9e7bc5fa687ce26e09ad3805b7157722da825b883eac49f?apiKey=95b7b2aa9950440b926ba3614b9a318a&"
            className="object-contain shrink-0 aspect-square w-[19px]"
            alt=""
          />
        </div>
      </button>
    </section>
  );
}

export default ReviewsSection;
