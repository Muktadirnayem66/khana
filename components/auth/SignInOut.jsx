"use client"

import useAuth from "@/app/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInOut = () => {
    const {auth, setAuth } = useAuth()
    const router = useRouter()

    const logout = ()=>{
        setAuth(null)
        router.push("/login")
    }
    
    return (
        <div>
            {
                auth ? (
                    <>
                    <span>Hello, {auth?.firstName+ " " + auth?.lastName}</span>
                    <span className="px-1">|</span>
                    <a className=" cursor-pointer" onClick={logout}>Logout</a>
                    
                    </>

                ) : (
                    <Link href="/login">Login</Link>
                )
            }
        </div>
    );
};

export default SignInOut;