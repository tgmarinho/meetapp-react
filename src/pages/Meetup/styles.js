import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 940px;
  margin: 0 auto;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    input {
      font-size: 18px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      font-size: 18px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 190px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      margin-top: 5px;
      margin-bottom: 5px;
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      width: 150px;
      margin: 10px 0 0;
      height: 44px;
      background: #d44059;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.08, '#d44059')};
      }

      svg {
        margin-right: 4px;
      }
    }
  }
`;
