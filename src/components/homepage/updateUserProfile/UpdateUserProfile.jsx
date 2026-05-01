import { authClient } from '@/lib/auth-client';
import React, { useRef } from 'react';
import { FaRegEdit, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UpdateUserProfile = ({ user }) => {
  const modalRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    //const email = e.target.email.value;
    const image = e.target.image.value;

    try {
      await authClient.updateUser({
        name,
        //email,
        image,
      });

      if (modalRef.current) {
        modalRef.current.checked = false;
      }
      
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <label htmlFor="my_modal_6" className="btn btn-primary">
        <FaRegEdit /> Update Profile
      </label>

      <input ref={modalRef} type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-md mt-16">
          <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          
          <div className="flex justify-center mb-4">
            <FaUserCircle size={50} className="text-gray-400" />
          </div>

          <form onSubmit={onSubmit} className="space-y-4 text-left">
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input 
                type="text" 
                name='name' 
                defaultValue={user?.name} 
                placeholder="Enter your name" 
                className="input input-bordered w-full" 
              />
            </div>

            {/* <div className="form-control w-full">
              <label className="label"><span className="label-text">Email Address</span></label>
              <input 
                type="email" 
                name='email' 
                defaultValue={user?.email} 
                placeholder="Enter your email" 
                className="input input-bordered w-full" 
              />
            </div> */}

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <input 
                type="url" 
                name='image' 
                defaultValue={user?.image} 
                placeholder="https://image-link.com" 
                className="input input-bordered w-full" 
              />
            </div>

            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn btn-outline">Cancel</label>
              <button type='submit' className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;