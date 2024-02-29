/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type State = {
    token: string | null,
    profile: any ,
    isAuth: boolean
}

type Actions = {
    setToken: (token: string) => void,
    setProfile: (profile: any) => void,
    logOut: () => void

}


export const useAuthStore = create(persist<State & Actions>(
    (set) => ({
        token: null,
        profile: null,
        isAuth: false,
        setToken: (token: string) => set((_state) =>({
            token,
            isAuth: true
        })),
        setProfile: (profile: any) => set((_state) =>({
            profile
        })),
        logOut: () => set((_state) =>({
            token: null,
            profile: null,
            isAuth: false
        }))
    }), {
        name: 'auth-storage',
    }
));

