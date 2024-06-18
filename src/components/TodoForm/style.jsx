import styled from "styled-components";
import { theme } from "../../defaultStyle/theme";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  input {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily.title};
    box-sizing: border-box;
    margin: ${({ theme }) => theme.size.s};
    border-radius: 6px;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.75);
    border: none;
    padding: ${({ theme }) => theme.size.xs};
    ::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  select {
    color: ${({ theme }) => theme.colors.black};
    border-radius: 6px;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.75);
    border: none;
    margin: ${({ theme }) => theme.size.s};
    padding: ${({ theme }) => theme.size.xs};
    option {
      color: ${({ theme }) => theme.colors.black};
      font-family: ${({ theme }) => theme.fontFamily.title};
      text-align: center;
    }
  }
`;
