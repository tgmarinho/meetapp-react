import styled from 'styled-components';

export const Container = styled.div`
  .react-datepicker {
  }
  .react-datepicker__input-container {
    width: 100%;
  }
  .react-datepicker__close-icon {
    top: 5px;
    right: 15px;
  }
  .react-datepicker__close-icon::after {
    background-color: #fb6f91;
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range {
    background-color: #fb6f91;
    &:hover {
      background-color: #fb6f91;
    }
  }
  .react-datepicker__time-container,
  .react-datepicker__time {
    width: 90px;
  }
  .react-datepicker__time-container {
    .react-datepicker__time {
      .react-datepicker__time-box {
        width: 80px;
      }
    }
  }
  .react-datepicker__time-container {
    .react-datepicker__time {
      .react-datepicker__time-box {
        ul.react-datepicker__time-list {
          li.react-datepicker__time-list-item--selected {
            background-color: #fb6f91;
            &:hover {
              background-color: #fb6f91;
            }
          }
        }
      }
    }
  }
  .react-datepicker__navigation--previous,
  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    margin: 0;
    right: 100px;
  }
  input {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  input + span {
    align-self: flex-start;
    margin: 5px 15px 0;
    font-weight: bold;
    color: #fb6f91;
  }
`;
