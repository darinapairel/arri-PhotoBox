import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import * as S from "./styles";

export const SearchForm = () => {
  return (
    <S.Form>
      <S.Input type="search" placeholder="Enter date of photo" />
      <S.Submit>
        {" "}
        <SearchIcon />{" "}
      </S.Submit>
    </S.Form>
  );
};
