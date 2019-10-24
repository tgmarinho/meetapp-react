import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  margin-top: 50px;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    section {
      display: flex;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.custom ? '#4DBAF9' : '#d44059')};
  border-radius: 4px;
  width: 160px;
  height: 42px;
  border: 0;
  margin-left: 15px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;

  svg {
    margin-right: 8px;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  img {
    display: flex;
    width: 940px;
    height: 300px;
  }

  p {
    margin-top: 20px;
    color: #fff;
    font-weight: normal;
  }

  section {
    margin-top: 30px;
    span {
      color: #999;
      font-weight: normal;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      svg {
        margin-left: 15px;
      }
    }
  }
`;
