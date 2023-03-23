import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  color: wheat;
`;
export const TrendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-bottom: 50px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: black;
  font-weight: 500;
  width: 350px;
  height: 600px;
  background-color: rgb(157, 162, 162, 0.25);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;

  :hover {
    box-shadow: 0px 10px 10px #072f13;
  }
`;
