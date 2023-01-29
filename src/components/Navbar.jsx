import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className='logo'>ChatTY</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="user photo" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </div>
  );
}

export default Navbar;
