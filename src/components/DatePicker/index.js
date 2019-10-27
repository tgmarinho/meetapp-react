import React, { useRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

export default function CustomDatePicker({ placeholder }) {
  const ref = useRef();
  const { defaultValue, registerField } = useField('date');
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: 'date',
      ref: ref.current,
      path: 'props.selected',
    });
  }, [ref.current]); // eslint-disable-line

  return (
    <Container>
      <DatePicker
        name="date"
        locale={pt}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        isClearable
        withPortal
        showTimeSelect
        minDate={new Date()}
        dateFormat="dd 'de' MMMM 'de' yyyy 'às' HH:mm"
        placeholderText={placeholder}
      />
    </Container>
  );
}

DatePicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
