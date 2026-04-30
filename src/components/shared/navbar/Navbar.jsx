'use client'
import ActiveNav from './ActiveNav';
import Image from 'next/image';
import NavLogo from '../../../assets/asset/user.png'
import LOGO from '../../../assets/asset/image.png'
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Link from 'next/link';
import React, { useState } from 'react';

import { Home, Grid, MessageSquare, LayoutDashboard, User, Settings, LogOut, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter()
    const handleSignOut = async () => {
        await authClient.signOut({
            //callbackURL: "/auth/signin",
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Logged Out Successfully');
                    router.push('/auth/signin')
                }
            }
        });
    };
    const links = (
        <>
            <ActiveNav href={'/'} icon={Home}>Home</ActiveNav>
            <ActiveNav href={'/allNavs/allTiles'} icon={Grid}>All Tiles</ActiveNav>
            <ActiveNav href={'/allNavs/contact'} icon={MessageSquare}>Contact</ActiveNav>
            <ActiveNav href={'/allNavs/dashboard'} icon={LayoutDashboard}>Dashboard</ActiveNav>
        </>
    );

    if (isPending) {
        return (
            <div className="h-16 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-sm border-b mt-4 rounded-xl mx-4">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }


    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm rounded-2xl px-4 md:px-6 mt-4 sticky top-4 z-50 border border-gray-200/50 mx-4 transition-all duration-300">
            <div className="flex justify-between items-center h-16">
                
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="text-xl font-bold tracking-tighter text-blue-600">
                    <Image src={LOGO} className='w-16 h-16 rounded-full' alt='Logo'/>
                        {/* TILES<span className="text-gray-800"> GALLERY</span> */}
                    </div>
                        <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
                            TILES<span className="text-gray-800 not-italic font-black">PRO</span>
                        </span>
                    </Link>
                </div>


                <div className="hidden lg:flex items-center bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                    <ul className="flex items-center gap-1 list-none">
                        {links}
                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    {user ? (
                        <div className="relative">
                            <button 
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200"
                            >
                                <div className="w-9 h-9 rounded-full ring-2 ring-blue-500/20 overflow-hidden bg-gray-100">
                                    <Image 
                                        width={36} 
                                        height={36} 
                                        src={user.image || NavLogo}
                                        referrerPolicy='no-referrer'
                                        alt="User" 
                                        className="object-cover"
                                    />
                                </div>
                                <span className="hidden md:block text-sm font-semibold text-gray-700">{user.name?.split(' ')[0]}</span>
                            </button>


                            {isProfileOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                                    <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-20 animate-in fade-in zoom-in duration-200 origin-top-right">
                                        <div className="px-4 py-3 border-b border-gray-50 mb-1">
                                            <p className="font-bold text-gray-800 truncate">{user.name}</p>
                                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                        </div>
                                        <Link href="/allNavs/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                            <User size={16} /> My Profile
                                        </Link>
                                        <Link href="/allNavs/settings" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                            <Settings size={16} /> Settings
                                        </Link>
                                        <div className="h-px bg-gray-100 my-1 mx-4"></div>
                                        <button 
                                            onClick={handleSignOut}
                                            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 cursor-pointer font-bold hover:bg-red-50 transition-colors"
                                        >
                                            <LogOut size={16} /> Log Out
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <Link href="/auth/signin" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-95">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden pb-6 pt-2 animate-in slide-in-from-top-4 duration-300">
                    <ul className="flex flex-col gap-2 list-none">
                        {links}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;