import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import history from "../history";
import { toast } from 'react-toastify';

const initialUser = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null;



const initialState = {
    isLoading: false,
    currentUser: initialUser,
    error: null,

};
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
        },
        registerSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        registerFailure: (state, action) => {
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;

        },
    },

});
export const { loginFailure, loginSuccess, registerFailure, registerSuccess, logoutSuccess, } = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {

    console.log(user);
    try {
        //const formdata = new FormData();

        //formdata.append('username', user.username);
        //
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await axios.post(
            'http://localhost:4002/auth/register',
            user,
            config
        );
        if (response.status === 200) {
            dispatch(registerSuccess(response.data));
            toast.success('Registration successful');
            history.push('/signin');
            window.location.reload();
        } else {
            dispatch(registerFailure())
        }
    } catch (error) {
        console.log(error);
        dispatch(registerFailure());

    }
};

export const singin = (user) => async (dispatch) => {
    console.log(user);
	try {
		const userData = {
			email: user.email,
			password: user.password,
		};
		const response = await axios.post(
			'http://localhost:4002/auth/signin',
			userData
		);
        if (response.status === 200) {
            localStorage.setItem('auth', JSON.stringify(response.data));
            dispatch(loginSuccess(response.data));
            toast.success('Login successful');
            history.push('/Dashboard');
            window.location.reload();
		} else {
			dispatch(loginFailure());
			toast.error('login failed');
		}
	} catch (error) {
		dispatch(loginFailure());
	}
};