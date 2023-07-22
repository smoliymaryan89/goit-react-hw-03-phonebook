import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #000000;
  }
  button {
    border-radius: 7px;
    padding: 1px;
  }
`;
