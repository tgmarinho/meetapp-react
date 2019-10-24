import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #d44059;
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
        margin-right: 4px;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
  }

  span {
    display: flex;
    align-items: center;
    color: #999;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    svg {
      margin-left: 12px;
    }
  }
`;
