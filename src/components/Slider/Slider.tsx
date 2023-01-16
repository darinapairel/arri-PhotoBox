import React from 'react'
import * as S from './styles'

type Photo = {
  photos: {
  id: number,
  name: string,
  src: string,
  alt: string
}[]}
// type Photos = {[key:string]: Photo}

export const Slider: React.FC<Photo> = ({photos}) => {
  const slideRef = React.createRef<HTMLLIElement>()
  const slidesContainerRef = React.createRef<HTMLUListElement>()
  
  // SLIDER CLICK LOGIC 
  const btnClkHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, next=false) => {
    const slideWidth = slideRef.current ? slideRef.current.clientWidth : 0
    console.log('event', typeof event, '\nref', slideRef.current, next, slideWidth)
    if (slidesContainerRef.current)
      next ?
        slidesContainerRef.current.scrollLeft += slideWidth
        :
        slidesContainerRef.current.scrollLeft -= slideWidth
  }
  return (
    <S.SliderWrapper className="slider-wrapper">
      {/* control buttons */}
      <S.SlideArrow className="slide-arrow" id="slide-arrow-prev" onClick={(event)=> btnClkHandler(event)}>
        &#8249;
      </S.SlideArrow>
      <S.SlideArrow className="slide-arrow" id="slide-arrow-next" onClick={(event)=> btnClkHandler(event, true)}>
        &#8250;
      </S.SlideArrow>
      {/* list of Slides (photos)*/}
      <S.SlidesContainer className="slides-container" id="slides-container" ref={slidesContainerRef}>
        {
          photos.map((photo) => {
            return(
              <S.Slide className="slide" ref={slideRef}>
                <S.ImgPhoto src={photo.src} alt={photo.alt} />
              </S.Slide>
            )
          }
          )
        }
      </S.SlidesContainer>
    </S.SliderWrapper>
  )
   
}
