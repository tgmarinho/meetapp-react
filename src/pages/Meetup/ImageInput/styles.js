import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      display: flex;
      width: 940px;
      height: 300px;
      border-radius: 4px;

      background-color: rgba(0, 0, 0, 0.3);
    }
    input {
      display: none;
    }
  }

  p {
    position: relative;
    top: -140px;
    left: 380px;
    color: #999;
    font-size: 20px;
  }
`;
