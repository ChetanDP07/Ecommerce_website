/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserTypes } from "../../../type";
import { auth } from "../../lib/firebase";
import Container from "../Container";
import toast from "react-hot-toast";

const UserProfile = ({ currentUser }: UserTypes) => {
  return (
    <Container className="py-5 text-whiteText">
      <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16">
        <div className="flex flex-col  sm:flex-row items-center justify-center gap-5 sm:gap-10">
          <img
            src={
              currentUser?.avatar
                ? currentUser?.avatar
                : "https://i.ibb.co/mJRkRRV/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
            }
            alt="userImage"
            className="w-40 h-40 rounded-full border border-gray-700 object-cover p-1"
          />

          <div className="text-start flex-1">
            <h2 className="text-xl font-bold tracking-tight text-gray-700  sm:text-4xl">Welcome back, {" "}
              <span className="underline underline-offset-2 decoration-[1px] font-medium">
                {currentUser?.firstName} {currentUser?.lastName}
              </span>
            </h2>
            <p className="text-start *:mt-6 max-w-3xl text-base  mt-3 leading-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque amet a ipsum magni est necessitatibus, voluptatum officia tenetur et? Recusandae provident incidunt itaque commodi eius dolore! Architecto, incidunt provident?
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-x-5 px-4">
          <button onClick={() =>
            toast.error("Upgrade to Pro Version")
          } className="rounded-md bg-gray-200 w-52 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Edit Profile</button>

          <button onClick={() =>
            toast.error("Upgrade to Pro Version")
          } className="rounded-md bg-gray-200 w-52 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Add Address</button>

          <button onClick={() => auth.signOut()} className="rounded-md bg-gray-200 w-52 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Log Out</button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#dark-gray-gradient)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="dark-gray-gradient">
              <stop stopColor="#4a4a4a" />
              <stop offset={1} stopColor="#1a1a1a" />
            </radialGradient>
          </defs>
        </svg>

      </div>


    </Container>

  );
};

export default UserProfile;
