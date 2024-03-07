import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { globalAPI } from "../API_handler/globalAPI";
import "./Login.css";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
    
            await globalAPI.post({
                username,
                pass,
                tipe : "user" // Now it will be "user"
            });
            window.location.href = "/";
    
        } catch (error) {
            setError(
                "An error occurred while creating the Account. Please try again."
            );
            console.error(error);
        }
    };
    return (
        <div className="container-login">
            <div class="center">

                <div class="bold-text">
                    Sign Up
                </div>
                <form onSubmit={handleSubmit}>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div class="txt_field">
                        <input value={username}
                            onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" required
                        />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div class="txt_field">
                        <input value={pass}
                            onChange={(e) => setPassword(e.target.value)} type="password" name="pass" id="password" required
                        />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <span>
                        <button class="btnlogin" type="submit" name="submit">Sign Up</button>
                    </span>
                </form>
                <div class="signup_link">
                    Already Have an Account ? <NavLink to="/">Log in</NavLink> Now
                </div>
                <h6 class="pass"><a href="https://www.youtube.com/c/AHDHAN16Bruh">© 2024 Ahdhan Setya Ananta XII RPL</a></h6>
            </div>
        </div>
    )
}

export default Signup;