import React from 'react'

export default function Login() {
    return (
        <div className='login'>
            <form>
                <h1>Login</h1>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}