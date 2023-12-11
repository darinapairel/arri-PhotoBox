import React, { useState } from "react";

import * as S from "./styles";

type Photo = {
  photos: {
    id: number;
    name: string;
    src: string;
    alt: string;
    date?: string;
    title?: string;
    tags?: string[];
    author?: string;
  }[];
  // photos: {
  //   id: number;
  // } & { [k: string]: string }[];
};

export const Slider: React.FC<Photo> = ({ photos }) => {
  // const { id, date, title, tags, author } = photos ?? "";
  // console.log(id, author);
  const slideRef = React.createRef<HTMLLIElement>();
  const slidesContainerRef = React.createRef<HTMLUListElement>();

  const [currentId, setCurrentSlide] = useState(1);

  // SLIDER CLICK LOGIC
  const btnClkHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const slideWidth = slideRef?.current ? slideRef.current.clientWidth : 0;
    const isNext = (event.target as HTMLElement).id.lastIndexOf("next") > -1;
    const setNext = () => {
      if (slidesContainerRef.current) {
        slidesContainerRef.current.scrollLeft += slideWidth;
        setCurrentSlide(currentId + 1);
      }
      return slidesContainerRef?.current?.scrollLeft;
    };

    const setPrev = () => {
      if (slidesContainerRef.current) {
        slidesContainerRef.current.scrollLeft -= slideWidth;
        setCurrentSlide(currentId - 1);
      }
      return slidesContainerRef?.current?.scrollLeft;
    };

    isNext ? setNext() : setPrev();

    console.log();
  };

  return (
    <S.SliderWrapper className="slider-wrapper">
      {/* control buttons */}
      {currentId > 1 && (
        <S.SlideArrow
          className="slide-arrow"
          id="slide-arrow-prev"
          onClick={btnClkHandler}
        >
          &#8249;
        </S.SlideArrow>
      )}
      {currentId < photos.length && (
        <S.SlideArrow
          className="slide-arrow"
          id="slide-arrow-next"
          onClick={btnClkHandler} // tru
        >
          &#8250;
        </S.SlideArrow>
      )}
      {/* list of Slides (photos)*/}

      <S.SlidesContainer
        className="slides-container"
        id="slides-container"
        ref={slidesContainerRef}
      >
        {photos.map(({ src, alt, id, date, title, tags, author }) => {
          console.log(date); //`${new Date(date)}`,
          return (
            <>
              <S.Slide key={id} className="slide" ref={slideRef}>
                <S.ImgPhoto src={src} alt={alt} />

                <S.Subtitle
                  key={id}
                  info={{
                    id: id,
                    date: date, //add mask for date
                    title: title,
                    tag: tags,
                    author: author,
                  }}
                />
              </S.Slide>
            </>
          );
        })}
      </S.SlidesContainer>
    </S.SliderWrapper>
  );
};
