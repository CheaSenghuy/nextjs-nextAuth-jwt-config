"use client"

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import authService from "@/service/auth.service";
import { PasswordUtils } from "@/utils/PasswordUtils";
import { Label } from "@radix-ui/react-label";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { toast } from "sonner";

interface Props { }

const SignUp: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: () => authService.register({username: userInfo.username 
      , password:PasswordUtils.encrypt(userInfo.password)}),
    onSuccess: () => {
      // Invalidate and refetch
      toast.success("Account has been created complete.")
      router.push("")
    },
    onError: () => {
      toast.error("Opps! Something went wrong")
    }
  })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();
    console.log('userInfo', userInfo)
    if (userInfo.username === '' || userInfo.password === '') {
      toast.warning("Username and Password cannot created.")
    } else {
      // setUserInfo({ username: userInfo.username, password: PasswordUtils.encrypt(userInfo.password) })
      mutation.mutate()
    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center h-[40rem] w-full bg-slate-200 relative antialiased">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10  px-20 py-24 
       bg-white dark:bg-zinc-900  bg-opacity-25 backdrop-filter backdrop-blur-lg">
        <form onSubmit={handleSubmit} className="flex gap-5 flex-col 
        flex-1 justify-start items-center ">
          <h1 className="relative  py-5 z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-sky-600 to-indigo-600 text-center font-sans font-bold">
            Sign-Up
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
            // value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type="password"
            placeholder="Passowrd"
            className="grid w-full max-w-sm items-center gap-1.5"
          />
          <Button type="submit" className="grid w-full max-w-sm items-center gap-1.5 bg-[#0082c8] hover:bg-teal-600" >Sign-Up</Button>
          <Button type="submit" className="grid w-full max-w-sm items-center gap-1.5 bg-pink-600 hover:bg-violet-700"
            onClick={() => router.push("login")}
          >Sign-In</Button>

        </form>

      </BackgroundGradient>


    </div>
  );
};

export default SignUp