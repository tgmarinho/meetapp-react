import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;
  margin-bottom: 20px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #000;
      font-size: 18px;
      color: #999;
      height: 15rem;
      font-weight: bold;
      border-radius: 4px;
      opacity: 0.4;

      svg {
        margin-bottom: 8px;
      }
    }

    img {
      min-width: 940px;
      max-width: 100%;
      max-height: 300px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
