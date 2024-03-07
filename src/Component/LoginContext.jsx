import React, { createContext, useState, useEffect, useContext } from "react";
import { globalAPI } from "./API_handler/globalAPI"; // Import your API handler

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [tipe, setTipe] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const checkCredential = async () => {
            const storedUsername = localStorage.getItem("username");
            const storedTipe = localStorage.getItem("tipe");
            if (storedUsername) {
                try {
                    // Fetch user data from the API using stored username
                    const userData = await globalAPI.get(storedUsername);
                    if (userData) {
                        setIsLoggedIn(true);
                        setUsername(storedUsername);
                        setTipe(storedTipe);
                    }
                } catch (error) {
                    console.error("Error checking credentials:", error);
                }
            }
        };
        checkCredential();
    }, []);

    const login = async (username, pass, tipe) => {
        try {
            const matchedUser = allUsers.find(
                (user) =>
                    user.username === username &&
                    user.pass === pass &&
                    user.tipe === tipe
            );
    
            if (matchedUser) {
                setIsLoggedIn(true);
                setUsername(username);
                setTipe(tipe);
                localStorage.setItem("username", username);
                localStorage.setItem("tipe", tipe);
            } else {
                alert("Invalid username, password, or account type");
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    
    const logout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setTipe("");
        localStorage.removeItem("username");
        localStorage.removeItem("tipe");
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await globalAPI.get(); // Assuming get() fetches all users from JSON Server
                setAllUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
    
        fetchUsers();
    }, []);

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout, username, tipe }}>
            {children}
        </LoginContext.Provider>
    );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin, LoginContext };
