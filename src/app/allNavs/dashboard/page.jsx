'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import defaultUser from '../../../assets/asset/user.png' 
import UpdateUserProfile from '@/components/homepage/updateUserProfile/UpdateUserProfile';

const ProfilePage = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user

  if (userData.isPending) 
    return <div className="h-16 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-sm border-b mt-4 rounded-xl mx-4">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
            </div>
    // if (!user) {
    //   redirect('/auth/signin')
    // }
  return (
    <div className="p-10 grid justify-center">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      
      <div className="flex flex-col items-center gap-4 bg-gray-50 p-8 rounded-2xl w-fit">
        <div >
          <Image 
            width={128}
            height={158}
            src={user?.image || defaultUser}
            referrerPolicy='no-referrer'
            alt={user?.name || 'User Profile'}
            className="rounded-full"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      <UpdateUserProfile user={user}/>
      </div>

    </div>
  );
};

export default ProfilePage;