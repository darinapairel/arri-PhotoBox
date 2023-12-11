import React from "react";

import * as S from "./styles";

const photosList: {
  id: number;
  name: string;
  src: string;
  alt: string;
  date?: string;
  title?: string;
  tags?: string[];
  author?: string;
}[] = [
  {
    id: 1,
    name: "",
    src: "https://play-lh.googleusercontent.com/jkpabs01pnEU5Jc9U3MuWdwwoWi8v7x33RZNYyLP2T8a2j1csnjOy3_-KI6JU8JntlNW",
    alt: "",
    date: "06 02 2022",
    title: "Girlfrend of the month",
    tags: ["card", "Zelenogradsk"],
    author: "Arun",
  },
  {
    id: 2,
    name: "",
    src: "",
    alt: "",
    date: "06 02 2022",
    title: "Girlfrend of the month",
    tags: ["card", "Zelenogradsk"],
    author: "Arun",
  },
  {
    id: 3,
    name: "",
    src: "",
    alt: "",
    date: "06 02 2022",
    title: "Girlfrend of the month",
    tags: ["card", "Zelenogradsk"],
    author: "Arun",
  },
];

export const Layout = () => {
  return (
    <>
      <S.HeaderNav />
      <S.Slider photos={photosList} />
    </>
  );
};
