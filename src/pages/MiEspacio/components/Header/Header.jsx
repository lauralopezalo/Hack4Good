import React, { useContext } from "react";
import UserContext from "context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const { user, logOut } = useContext(UserContext);
    console.log(user)

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/")
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <header aria-label="Page Header">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Welcome Back, {user.email}
                            </h1>

                            <p className="mt-1.5 text-sm text-gray-500">
                                Let's write a new blog post! 🎉
                            </p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">

                            <button onClick={handleLogOut}>
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;