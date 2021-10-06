import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='logo'>
          <Image
            src='/logo2.png'
            alt='q-premium-logo'
            width={175}
            height={55}
          />
        </div>
        <div className='menu'>
          <span className='menu__text'>Menu</span>
          <FaBars className='menu__icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
