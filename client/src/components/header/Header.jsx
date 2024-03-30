import "./header.scss";
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginSuccess } from "../../redux/authSlice";
import history from "../../history";


const Header = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => ({ ...state }));
  const handleClick = e =>{
    e.preventDefault();
    dispatch(loginSuccess());
    localStorage.removeItem('auth');
    history.push('/signin');
    window.location.reload();

  }
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <h5>Task Manager</h5>
        </div>
        <div className="header__buttons">
          {auth.currentUser && auth.currentUser.token ? (
            <Link to='/signOut' className='button'onClick={handleClick}>SignOut</Link>
          ) : (
            <>
              <Link to='/signin' className='button'>Signin</Link>
              <Link to='/signup' className='button'>SignUp</Link>
            </>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Header;