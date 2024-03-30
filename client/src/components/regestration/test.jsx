import './registrations.scss';
import '../../styles/components/_button.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { register } from '../../redux/authSlice';





const Signup = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',
        username: '',

    });
  

    const  handleSubmit = (e) => {
        e.preventdefault();

        dispatch(
            register({
                username: state.username,
                password: state.password,
                email: state.email,
            })
        );
    };
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
 

    };



    return (
        <div>
            <div className="signup_form">
                <div className="signup__from__wrapper">
                    <form className='form' onSubmit={handleSubmit}>
                        <h4>Sing up</h4>
                        <div className="from-group">
                        <input type='name' name= 'text' id='user'placeholder='Enter name' value={state.username} onChange={handleChange}  />
                        </div>
                        <div className="from-group">
                            <input type="email" name='email' value={state.email} id='email2' autoComplete="username" placeholder='Enter email' onChange={handleChange} />
                        </div>
                        <div className="from-group">
                        <input type="password" name="password" id="password" placeholder="Enter password" autoComplete="current-password" value={state.password}   onChange={handleChange} />
                        </div>
                        <div className="from-group">
                            <button>Sing in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup;