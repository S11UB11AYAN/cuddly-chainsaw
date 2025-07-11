import { useState } from "react";

export default function Carousel() {
  const [currPic, setCurrPic] = useState(0);

  const pics = [
    {
      title: "Dog",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s",
    },
    {
      title: "cat",
      url: "https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small_2x/silver-tabby-cat-sitting-on-green-background-free-photo.jpg",
    },
  ];

  function prevImage() {
    if (currPic == 0) {
      setCurrPic(pics.length - 1);
    } else {
      setCurrPic(currPic - 1);
    }
  }

  function nextImage() {
    if (currPic == pics.length - 1) {
      setCurrPic(0);
    } else {
      setCurrPic(currPic + 1);
    }
  }

  return (
    <>
      <button
        className="bg-white rounded-lg w-[100px] h-[45px] hover:bg-blue-500 shadow-md m-20"
        onClick={prevImage}
      >
        Prev Image
      </button>
      {pics.map((pic, index) => {
        if (index == currPic) {
          return <img src={pic.url} key={index} alt="" />;
        }
      })}
      <button
        className="bg-white rounded-lg w-[100px] h-[45px] hover:bg-blue-500 shadow-md m-20"
        onClick={nextImage}
      >
        Next Image
      </button>
    </>
  );
}
