import { useEffect, useState } from 'react';
import * as Style from './Header.style';

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleShowSide = () => {
    console.log(showSideMenu);
    setShowSideMenu(!showSideMenu);
  };

  const handResize = () => {
    if (window.innerWidth >= 922 && showSideMenu) {
      toggleShowSide();
    }
  };

  useEffect(() => {
    console.log('aaa');
    window.addEventListener('resize', handResize);

    return () => {
      window.removeEventListener('resize', handResize);
    };
  });

  console.log('b');

  return (
    <Style.Wrapper>
      <Style.Menu>
        <p>link 1</p>
        <p>link 2</p>
      </Style.Menu>
      <Style.SideMenu showSideMenu={showSideMenu}>
        <p>Exemplo</p>
      </Style.SideMenu>
      <Style.ButtonMenu type="button" onClick={toggleShowSide}>menu</Style.ButtonMenu>
      <Style.Title>TO DO</Style.Title>
      <p>GitHub</p>
    </Style.Wrapper>
  );
};

export default Header;
