import styled from "styled-components";

import { SearchForm } from "../SearchForm/SearchForm";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: antiquewhite;
  opacity: 0.1;
  &:hover {
    opacity: 0.7;
  }
`;
export const Logo = styled.div`
  min-width: fit-content;
  margin-right: 40px;
  border: 1px salmon dotted;
  height: fit-content;
  padding: 8px;
  color: salmon;
`;
export const Search = styled(SearchForm)``;
