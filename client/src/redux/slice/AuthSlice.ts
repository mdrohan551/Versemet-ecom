import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface admins {
    id: string;
    name: string;
    email?: string;
    role: string;
}

interface AdminData {
    token: string;
    user: admins;
}

interface AuthState {
    token: string | null;
    user: admins | null;
}

const LoadAdminFromLocalstorage = (): AuthState => {
    try {
        if (typeof window === "undefined") return { token: null, user: null };

        const id = localStorage.getItem("id");
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!id || !name || !token || !role) {
            return { token: null, user: null };
        }

        return {
            token: token,
            user: {
                id,
                name,
                email: email || undefined,
                role
            }
        };
    } catch (error) {
        console.error("Error loading auth from localStorage:", error);
        return { token: null, user: null };
    }
};

const initialState: AuthState = LoadAdminFromLocalstorage();

const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<AdminData>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;

            const { token, user } = action.payload;
            localStorage.setItem("id", user.id);
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email || "");
            localStorage.setItem("token", token);
            localStorage.setItem("role", user.role);
        },
        logout: (state) => {
            state.token = null;
            state.user = null;

            localStorage.removeItem("id");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            localStorage.removeItem("role");
        }
    }
});

export const { setAdmin, logout } = AuthSlice.actions;
export default AuthSlice.reducer;