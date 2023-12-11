import React, { useEffect } from "react";

import * as S from "./styles";

interface Iinfo {
  date: string;
  title: string;
  tag: string[];
  author: string;
}

export const FooterInfo = ({ info }: { [index: string]: any }) => {
  // const { id, date, title, tags, author } = info;
  const titles: (keyof Iinfo)[] = ["date", "title", "tag", "author"];
  useEffect(() => console.log(info, titles, info.tag, info["tag"]));

  return (
    <S.Wrapper>
      {/* <S.Item className={'id'}>
        
      </S.Item> */}
      {titles?.map((i: string) => (
        <S.Item className={i}>
          {i === "tag"
            ? info.tag.map((t: string) => <S.Tag>{t}</S.Tag>)
            : info[i]}
        </S.Item>
      ))}
    </S.Wrapper>
  );
};
