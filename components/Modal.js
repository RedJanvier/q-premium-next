import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = ({ children, closeModal }) => {
  return (
    <div className='backdrop' onClick={closeModal}>
      <div className='modal'>
        <AiFillCloseCircle
          className='modal__close'
          size={40}
          onClick={closeModal}
          color='var(--primary-color)'
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
