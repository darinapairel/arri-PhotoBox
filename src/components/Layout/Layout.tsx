import React from "react";

import * as S from "./styles";

const photosList: {
  id: number;
  name: string;
  src: string;
  alt: string;
}[] = [
  {
    id: 1,
    name: "",
    src: "https://play-lh.googleusercontent.com/jkpabs01pnEU5Jc9U3MuWdwwoWi8v7x33RZNYyLP2T8a2j1csnjOy3_-KI6JU8JntlNW",
    alt: "",
  },
  {
    id: 2,
    name: "",
    src: "",
    alt: "",
  },
  {
    id: 3,
    name: "",
    src: "",
    alt: "",
  },
];

export const Layout = () => {
  return (
    <>
      <S.HeaderNav />
      <S.Content photos={photosList} />
      <S.Footer
        info={{
          date: `${new Date("06 02 2022")}`, //add mask for date
          title: "Girlfrend of the month",
          tag: ["card", "Zelenogradsk"],
          author: "Arun",
        }}
      />
    </>
  );
};
