import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
`;

export default function Loading({ type }) {
  return (
    <Container>
      <Loader type={type} color="#d44059" width={160} height={160} />
    </Container>
  );
}

Loading.propTypes = {
  type: PropTypes.string,
};

Loading.defaultProps = {
  type: 'Oval',
};
