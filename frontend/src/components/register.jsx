import React from "react"
import "../css/register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="register_page">
            <div className="reg-body">

            <div className="reg-details">
                <h1>POCKET PILOT</h1>
                {/* <p className="to-login">Already have an account? <span><Link to="/login">Login</Link></span></p> */}
            </div>
            <div className="reg-form">
                <form>
                    <div className="fields">
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}