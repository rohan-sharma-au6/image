import React from 'react';

const navbar = () => {
    return (
        <div>
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/upload">Upload Image</a></li>
                
            </ul>

        </div>
    );
};

export default navbar;