import styled from "styled-components";
import { theme } from "./theme";

export const Prg = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.size.m};
  text-align: center;
  margin: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.size.n};
  text-align: center;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: ${({ theme }) => theme.size.m};
  text-align: center;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  flex-direction: column;
  text-align: center;
`;

export const Category = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.size.s};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  opacity: 0.8;
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
  transition: ease-in-out 0.3s;
  border-radius: 0.5rem;
  margin: ${({ theme }) => theme.size.xs};
  padding: 10px;
  border: none;
  &:hover {
    transition: ease-in-out 0.3s;
    opacity: 1;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`;

export const Select = styled.select`
  color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.75);
  border: none;
  padding: ${({ theme }) => theme.size.xs};
  margin: ${({ theme }) => theme.size.xs};
  option {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily.title};
    text-align: center;
  }
`;
