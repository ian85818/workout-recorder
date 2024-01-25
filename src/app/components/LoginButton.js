'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export function LoginButton() {
    const { data: session } = useSession();
    const isLogin = session && session.user;
    const callback = isLogin ? signOut : signIn;
    const text = isLogin ? 'logout' : 'login';
    return <button onClick={() => { callback(); }}>{text}</button>
}