import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import type { AppRootState } from '../../redux/store/store';
import { toggleTheme } from '../../redux/features/Theme/Theme';

const Theme_button: React.FC<{ className?: string, user: boolean }> = ({ className, user }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state: AppRootState) => state.theme.theme);

    const changeTheme = () => {
        dispatch(toggleTheme());
        if (user === false) {
            window.location.reload()
        }
    }
    return (
        <button
            onClick={() => changeTheme()}
            className={`${className} p-2 rounded-md transition-all duration-300 flex items-center justify-between gap-2 capitalize`}
        >
            {user === true ? (

                <>
                    <span className={`text-sm font-jakarta-ExtraLight ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                        {theme === "light" ? "Dark mode" : "Light mode"}
                    </span>
                    {theme === 'light' ? <FaMoon /> : <FaSun className="text-primary" />}
                </>
            ) : (
                theme === 'light' ? <FaMoon /> : <FaSun className="text-primary" />
            )}
        </button>
    );
};
export default Theme_button;