import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  color: wheat;

  padding-top: 25px;
  padding-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  max-width: 1600px;

  margin: 0 auto;
  padding: 0 15px;
`;
export const TrendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 4 - 20px);

  background-color: rgb(157, 162, 162, 0.25);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;

  :hover {
    box-shadow: 0px 10px 10px #072f13;
  }
`;

export const SubTitle = styled.h3`
  padding: 5px;
`;
