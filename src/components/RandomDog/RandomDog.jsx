import { useEffect, useState } from 'react';
import * as Style from './RandomDog.Style';

const RandomDog = () => {
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(false);

  const url = 'https://dog.ceo/api/breeds/image/random';
  const options = {
    method: 'GET',
  };

  const handleResponse = async (response) => {
    const data = await response.json();
    const { message } = data;
    setCurrentImage(message);
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
  };

  const requestDog = () => {
    setLoading(true);
    const request = fetch(url, options);
    request.then(handleResponse);
    request.catch(handleError);
  };

  const handleClick = () => {
    requestDog();
  };

  useEffect(() => {
    requestDog();
  }, []);

  return (
    <Style.Wrapper>
      <Style.Title>RandomDog</Style.Title>
      <Style.Container>
        <Style.Image alt="dog" src={currentImage} Loading={loading} />
        <Style.Loading loading={loading}>Loading...</Style.Loading>
      </Style.Container>
      <Style.Button type="button" onClick={handleClick}>Load</Style.Button>
    </Style.Wrapper>
  );
};

export default RandomDog;
