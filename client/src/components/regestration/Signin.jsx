import './registrations.scss';
import '../../styles/components/_button.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singin } from '../../redux/authSlice';




const Signin = () => {


    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',

    });


    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            singin({
                password: state.password,
                email: state.email,
            })
        );
    };


    return (
        <div>
            <div className="signup_form">
                <div className="signup__from__wrapper">
                    <form className='form' onSubmit={handleSubmit}>
                        <h4>Sing In</h4>
                        <div className="from-group">
                            <input type="email" name="email" id="email1" placeholder="Enter email" autoComplete="usernamee" value={state.email} onChange={handleChange} />
                        </div>
                        <div className="from-group">
                            <input type="password" name="password" id="password1" placeholder="Enter password" autoComplete="current-password" onChange={handleChange} />
                        </div>
                        <div className="from-group">
                            <button>Sing in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};
export default Signin;