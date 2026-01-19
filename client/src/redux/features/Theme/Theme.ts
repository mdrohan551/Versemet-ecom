import { createSlice } from "@reduxjs/toolkit";

type Theme = 'light' | 'dark';

const saveTheme = localStorage.getItem('theme') as Theme | null;
const initialTheme: Theme = saveTheme ? saveTheme : 'light';

if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: initialTheme
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
            if (state.theme === 'dark') {
                document.documentElement.classList.add('dark');

            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;