'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';

const SignUpPage = () => {
        const handleGoogleSignUp= async()=>{
    const data = await authClient.signIn.social({
        provider: "google",
        })
    //     if (data) {
    // toast.success('Congratulations! You have successfully signed up.')
    // }else{
    // toast.error("Something went wrong. Please try again.")
    // }

    }
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const {register, handleSubmit, formState: { errors },} = useForm()
    const onSubmit = async(data)=>{
    const {email, name, photo, password } = data
    const {data: res, error} = await authClient.signUp.email({
        name: name,
        image: photo,
        email: email,
        password: password
    })
    if (res) {
    toast.success(`Congratulations ${name}! You have successfully signed up.`);
    router.push('/auth/signin')
  }else if (error) {
    toast.error(error.message || "Something went wrong. Please try again.");
  }
    
    }
return (
        <div className="min-h-screen bg-[#F3F3F3] flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-[600px] p-8 md:p-14 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold text-center text-[#403F3F] mb-10">Register your account</h2>
                <hr className="mb-10" />
                {/* form */}
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label mb-2 block font-semibold text-[#403F3F]">Your Name</label>
                        <input 
                            type="text" 
                            {...register("name", { required: true })}
                            placeholder="Enter your name" 
                            className="w-full bg-[#F3F3F3] border-none p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" 
                            
                        />
                        <p>{errors.name && <small className='text-red-500'>This field is required</small>}</p>
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control">
                        <label className="label mb-2 block font-semibold text-[#403F3F]">Photo URL</label>
                        <input 
                            type="text" 
                            {...register("photo", { required: true })}
                            placeholder="Enter photo URL" 
                            className="w-full bg-[#F3F3F3] border-none p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" 
                        />
                        <p>{errors.photo && <small className='text-red-500'>This field is required</small>}</p>
                    </div>

                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label mb-2 block font-semibold text-[#403F3F]">Email</label>
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

                    {/* Terms and Conditions */}
                    <div className="flex items-center gap-2 mt-4">
                        <input type="checkbox" name="terms" id="terms" className="cursor-pointer" 
                        {...register("terms", { required: true })}
                        />
                        <label htmlFor="terms" className="text-sm text-[#706F6F] cursor-pointer">
                            Accept <span className="font-bold">Term & Conditions</span>
                        </label>
                    </div>
                    <p>{errors.terms && <small className='text-red-500'>This field is required</small>}</p>

                    {/* Register Button */}
                    <div className="form-control mt-6">
                        <button className="w-full bg-[#403F3F] text-white py-4 rounded-md font-semibold cursor-pointer text-lg hover:bg-black transition">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-[17px] font-semibold mt-5">Or</p>

      <button onClick={handleGoogleSignUp} className='w-full btn text-[18px] mt-5'><GrGoogle/> 
      Sign Up With Google
      </button>
                <p className="text-center mt-6 text-sm font-semibold text-[#706F6F]">
                    Already Have An Account? <Link href="/auth/signin" className="text-[#F75B5F] hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;