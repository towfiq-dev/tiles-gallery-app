'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { GrGoogle } from 'react-icons/gr';

const SignInPage = () => {
    const handleGoogleSignIn= async()=>{
        const data = await authClient.signIn.social({
            provider: "google",
            })
        //     if (data) {
        // toast.success('Congratulations! You have successfully signed in.')
        // }else{
        // toast.error("Something went wrong. Please try again.")
        // }

        }
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
        const {register, handleSubmit, formState: { errors },} = useForm()
        const onSubmit = async(data)=>{
        const {email, password } = data
        const {data: res, error} = await authClient.signIn.email({
            email: email,
            password: password
        })
        if (res) {
        toast.success(`Congratulations! You have successfully signed in.`);
        router.push('/')
      }else if (error) {
        toast.error(error.message || "Something went wrong. Please try again.");
      }
        
        }
    return (
        <div className="min-h-screen bg-[#F3F3F3] flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-[600px] p-8 md:p-14 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-10">Login your account</h2>
                <hr className="mb-10" />
                {/* form */}
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label mb-2 block font-semibold text-[#403F3F]">Email address</label>
                        <input 
                            type="email" 
                            {...register("email", { required: true })}
                            placeholder="Enter your email address" 
                            className="w-full bg-[#F3F3F3] border-none p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" 
                        
                        />
                        <p>{errors.email && <small className='text-red-500'>This field is required</small>}</p>
                    </div>

                    {/* Password Field */}
                    <div className="form-control relative">
                        <label className="label mb-2 block font-semibold text-[#403F3F]">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            {...register("password", { required: true })}
                            placeholder="Enter your password" 
                            className="w-full bg-[#F3F3F3] border-none p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" 
                            
                        />
                        <span 
                            className="absolute right-4 top-[52px] cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </span>
                        <p>{errors.password && <small className='text-red-500'>This field is required</small>}</p>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-8">
                        <button className="w-full bg-[#403F3F] text-white py-4 rounded-md font-semibold text-lg hover:bg-black transition">
                            Login
                        </button>
                    </div>
                </form>
                                <p className="text-center text-[17px] font-semibold mt-5">Or</p>
                
                      <button className='w-full btn text-[18px] mt-5' onClick={handleGoogleSignIn}><GrGoogle/> 
                      Sign In With Google
                      </button>
                <p className="text-center mt-6 text-sm font-semibold text-[#706F6F]">
                    Dont Have An Account? <Link href="/auth/signup" className="text-[#F75B5F] hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default SignInPage;