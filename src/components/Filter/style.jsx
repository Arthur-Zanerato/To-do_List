import styled from "styled-components";
import { theme } from "../../defaultStyle/theme";

export const FilterSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  border-radius: ${({ theme }) => theme.size.s};
`;
