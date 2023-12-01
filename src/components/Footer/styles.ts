import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgb(247 225 215);
  opacity: 0.1;
  &:hover {
    opacity: 0.7;
  }
`;
export const Item = styled.div<{ className: string }>``;

export const Tag = styled.span`
  border: 3px dotted white;
  padding: 6px;
  background: rgb(247, 241, 215);
  border-radius: 15px;
  margin-left: 10px;
`;
