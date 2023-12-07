import React, { useState } from "react";
import adminImg from '../../assets/blockAdmin.jpg';
import './LoginModal.css';


const LoginModal = ({ isAdmin, setIsAdmin, setShowLogIn, setLogOut, setIsOpen }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const bg = {
        backgroundColor: '#fff3e6'
    }

    const handleSubmit = () => {
        if (username && password === 'admin') {
            setIsAdmin(true)
            // setLogOut(true)
            // setShowLogIn(false)
            // window.location.reload(false)
            console.log(isAdmin)
        }
    }

    const closeModal = () => {
        setLogOut(false)
        setShowLogIn(true)
        setIsOpen(false)
    }



    return (
        <div className="modal-background">

            <form className="modal">

                <div className="imgcontainer">
                    <img src={adminImg} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input" type="text" placeholder="Username" name="username"
                        required
                    />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="Password" name="psw" required />

                    <button onClick={handleSubmit} className="login" type="submit">Login</button>

                </div>

                <div className="container" style={bg}>
                    <button onClick={closeModal} type="button" className="cancelbtn">
                        Cancel
                    </button>
                </div>
            </form>

        </div>
    )
}

export default LoginModal