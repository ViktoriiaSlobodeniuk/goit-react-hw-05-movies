import styled from 'styled-components';

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ActorItem = styled.li`
  flex-basis: calc(100% / 6 - 20px);
  display: flex;
  flex-direction: column;
  background-color: rgb(157, 162, 162, 0.25);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  color: white;
`;
