import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      font-size: 18px;
      border-radius: 4px;
      height: 55px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    span {
      color: #d44059;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    div {
      flex-direction: row;
      align-self: flex-end;
      margin-top: 10px;

      button {
        height: 40px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
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
          margin-right: 8px;
        }
      }
    }
  }
`;
