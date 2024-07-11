"use client"
import { loginPerform } from "@/app/actions";
import useAuth from "@/app/Hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LoginForm =  () => {
  const [error, setError] = useState("")
  const {setAuth, auth} = useAuth()
  const router = useRouter()

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const found = await loginPerform(formData)
      if(found){
        setAuth(found)
        router.push("/")
      }else{
        setError("Please provide a valid credentials")
      }
    } catch (error) {
      throw new Error(error.message)
    }

  }
    return (
        <section className="h-screen grid place-items-center ">
          
      <div className="max-w-[450px] w-full mx-auto p-6 border  border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <div className="text-red-800 my-2">
            {error}
          </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Login</button>
        </form>

        <p className="text-center text-xs text-gray-600">Or</p>

        <Link href={"/register"} className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
          Create New Account
        </Link>
      </div>
    </section>
    );
};

export default LoginForm;