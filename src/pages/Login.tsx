import { SignIn } from "@clerk/clerk-react";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};
