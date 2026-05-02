import React from 'react';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">

      <div className="bg-white border-b py-8 px-4 mb-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Account Settings</h1>
          <p className="text-gray-500 mt-2">Manage your profile, security, and preferences.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="md:col-span-1">
          <ul className="menu bg-white p-4 rounded-xl shadow-sm border gap-2">
            <li><a className="active bg-blue-600 text-white font-medium">Profile Info</a></li>
            <li><a>Security & Password</a></li>
            <li><a>Notifications</a></li>
            <li><a>Billing & Subscription</a></li>
            <div className="divider my-1"></div>
            <li><a className="text-error font-medium">Delete Account</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col gap-8">
          
          {/* Profile Section */}
          <div className="card bg-white shadow-sm border">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4 text-gray-700">Personal Information</h2>
              
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                    <img src="https://i.pravatar.cc/150?u=towfiq" alt="Profile" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-primary btn-sm normal-case">Change Photo</button>
                  <button className="btn btn-ghost btn-sm normal-case border-gray-200">Remove</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control w-full">
                  <label className="label"><span className="label-text font-semibold">Full Name</span></label>
                  <input type="text" placeholder="Towfiqul Islam" className="input input-bordered focus:border-blue-500 w-full" />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text font-semibold">Email Address</span></label>
                  <input type="email" placeholder="towfiqul.islam99@gmail.com" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full md:col-span-2">
                  <label className="label"><span className="label-text font-semibold">Short Bio</span></label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="Tell us about yourself..."></textarea>
                </div>
              </div>

              <div className="card-actions justify-end mt-6">
                <button className="btn btn-primary px-8">Save Changes</button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="card bg-white shadow-sm border">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4 text-gray-700">Privacy & Notifications</h2>
              
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  <span className="label-text">Receive email updates about new tile collections</span>
                </label>
              </div>
              
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-4">
                  <input type="checkbox" className="toggle toggle-primary" />
                  <span className="label-text">Public Profile (Anyone can see your favorites)</span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;