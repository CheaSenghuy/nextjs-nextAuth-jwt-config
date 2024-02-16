"use client"

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"

interface Props { }

const LoginForm: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    // validate your userinfo
    e.preventDefault()

    if( userInfo.username === '' || userInfo.password ===''){
      toast.warning("Username and Password is  required.")
      return;
    }

    const res = await signIn("credentials", {
      email: userInfo.username.replace(/\s/g, ''),
      password: userInfo.password,
      callbackUrl: "/",
      redirect: false,
    });

    console.log('res', res)

    if (res?.ok) {
      toast.success("Login Successfully.")
      router.push("dashboard")
    } else {
      toast.error("Username and Password is Incorrect.")
    }

  };

  return (
    <div className=" min-h-screen flex justify-center items-center  h-[40rem] w-full bg-neutral-950 relative antialiased">

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10  px-20 py-24 
       bg-white dark:bg-zinc-900  bg-opacity-25 backdrop-filter backdrop-blur-lg">
        <form onSubmit={handleSubmit} className="flex gap-6 flex-col 
        flex-1 justify-start items-center ">
          <h1 className="relative py-5 z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-sky-600 to-indigo-600 text-center font-sans font-bold">
            Login
          </h1>
          <Label htmlFor="username" className="grid w-full max-w-sm items-center gap-1.5">Username</Label>
          <Input
            value={userInfo.username}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, username: target.value })
            }
            type="text"
            placeholder="Username"
            className="grid w-full max-w-sm items-center gap-1.5"
          />
          <Label htmlFor="password" className="grid w-full max-w-sm items-center gap-1.5" >Password</Label>
          <Input
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="Passowrd"
            className="grid w-full max-w-sm items-center gap-1.5  "
            
          />
          <Button type="submit" className="grid w-full max-w-sm items-center gap-1.5 bg-[#0082c8] hover:bg-teal-600" >Login</Button>
          <p className="text-sm">Donnot have <Link href={"signup"} className="text-pink-600 hover:text-violet-700">
            account ?
          </Link> </p>
         
        </form>

      </BackgroundGradient>


    </div>
  );
};


export default LoginForm