"use client"

import { supabase } from "@/lib/supabase";
import { useState } from "react";


export default function Login() {

  const [data, setData] = useState<{
    email: string,
    password: string
  }>({
    email: '',
    password: ''
  })

  const login = async () => {
    try {
      let { data, error } = await supabase
      .auth
      .signInWithPassword({
        email: 'someone@email.com',
        password: 'oECiNdebviZTDXHNeYMm'
      })
      
      if (data) {}

    }catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e: any) => {
    const { name, value} = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto w-[400px] p-4 bg-white rounded-lg shadow-md">
      <form className="grid gap-4">
        <div className="grid grid-cols-1 gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={data?.email}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={data?.password}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        </div>
        <button
          type="button"
          onClick={login}
          className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
  }