import React, { useEffect } from "react";

import * as S from "./styles";

interface Iinfo {
  date: string;
  title: string;
  tag: string[];
  author: string;
}

export const FooterInfo = ({ info }: { [index: string]: any }) => {
  useEffect(() => console.log(info));
  const titles: (keyof Iinfo)[] = ["date", "title", "tag", "author"];
  return (
    <S.Wrapper>
      {titles.map((i: string) => (
        <S.Item className={i}>
          {i === "tag"
            ? info.tag.map((t: string) => <S.Tag>{t}</S.Tag>)
            : info[i]}
        </S.Item>
      ))}
    </S.Wrapper>
  );
};
