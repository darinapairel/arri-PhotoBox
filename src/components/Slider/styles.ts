import styled, { css } from "styled-components";

export const SliderWrapper = styled.section`
  margin: 1rem;
  position: relative;
  overflow: hidden;
`;
export const SlideArrow = styled.button<{ id: string }>`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 4rem;
  background-color: white;
  border: none;
  width: 2rem;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 100ms;
  &:hover,
  &:focus {
    opacity: 1;
  }
  ${({ id }) => {
    if (id === "slide-arrow-prev")
      return css`
        left: 0;
        padding-left: 0.25rem;
        border-radius: 0 2rem 2rem 0;
      `;
    if (id === "slide-arrow-next")
      return css`
        right: 0;
        padding-left: 0.75rem;
        border-radius: 2rem 0 0 2rem;
      `;
  }}
`;
export const SlidesContainer = styled.ul`
  height: calc(100vh - 2rem - 150px);
  width: 100%;
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Slide = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 0 100%;
`;
export const ImgPhoto = styled.img`
  height: 100%;
  object-fit: cover;
  margin: auto;
`;
export const Content = styled.div``;
