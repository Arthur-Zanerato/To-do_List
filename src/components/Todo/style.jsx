import styled from "styled-components";
import { theme } from "../../defaultStyle/theme";

export const Todo = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.size.n};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.size.n};
  padding: ${({ theme }) => theme.size.n};
  margin: ${({ theme }) => theme.size.s};
  border-radius: ${({ theme }) => theme.size.s};
  background-color: ${({ theme }) => theme.colors.lightOrange};
  div{
    margin: ${({ theme }) => theme.size.s};
  }
`;
