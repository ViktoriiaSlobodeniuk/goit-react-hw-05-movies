import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;

  margin: 0 auto;
  padding: 0 15px;
`;

export const MovieCard = styled.div`
  display: flex;
  gap: 20px;
  box-shadow: 5px 5px 10px #072f13;
  border-radius: 5px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 18px;
`;

export const AddInfo = styled.div`
  text-align: center;
  color: white;
  font-style: italic;
`;
export const AddList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Item = styled.li`
  font-weight: 500;
  padding: 10px;
  width: 70px;

  :hover {
    box-shadow: 3px 3px 20px #072f13;
    border-radius: 15px;
  }
`;
