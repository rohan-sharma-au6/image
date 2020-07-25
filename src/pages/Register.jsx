import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    return (
        <div>
            <form >
                <input name="name" placeholder="Enter Name" />
                <input name="email" placeholder="Enter Email" />
                <input name="passWord" type="password" placeholder="Enter Password" />
                <Link to={'/login'} ><input type="submit" value="register" /></Link>
            </form>
            
        </div>
    );
};

export default Register;