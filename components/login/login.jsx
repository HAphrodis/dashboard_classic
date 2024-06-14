'use client'

import { useForm, Controller } from "react-hook-form";
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
// 在最新版本的 react-dom 中，使用 useFormStatus 來管理表單狀態。
// import { useFormStatus } from 'react-dom'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div className="flex flex-col items-center mt-48">
    {/* <!-- Sign In Form --> */}
    <div className="rounded-[10px] border items-center border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
        <h3 className="font-semibold text-dark dark:text-white">
          Sign In Form
        </h3>
      </div>
      <form action="#">
        <div className="p-6.5">
          <Input
            label="Email"
            type="email"
            placeholder="Enter email address"
            customClasses="mb-4.5"
            className="mb-5"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

         
          <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
            Sign In
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;
