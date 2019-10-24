import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;

  max-width: 940px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      height: 35px;
      margin-right: 20px;
      padding-right: 20px;
    }
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    background: #d44059;
    border-radius: 4px;
    width: 71px;
    height: 42px;
    border: 0;
    margin-left: 15px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
  }
`;
