import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import { Container } from './styles';

export default function ImageInput() {
  const ref = useRef();

  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    data.append('type', 'banner');
    const response = await api.post('files', data);
    const { id, url } = response.data;
    console.tron.log(id);
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="bannerss">
        <img src={preview} alt="" />
        {!preview && <p>Selecionar Imagem</p>}

        <input
          type="file"
          id="bannerss"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}