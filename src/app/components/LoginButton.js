'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export function LoginButton() {
    const { data: session } = useSession();
    const isLogin = session && session.user;
    const callback = isLogin ? signOut : signIn;
    return <button onClick={() => { callback(); }}>{callback.name}</button>
}