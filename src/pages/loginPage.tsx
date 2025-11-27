import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { DataContext } from "@/context/dataContext";


const Login: React.FC = () => {
  const {user,actions} = React.useContext(DataContext);

  const handleGoogleSignIn = () => {
    actions.loginUser(); // Replace with your OAuth endpoint
  };

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 flex px-4 md:px-0 items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
            {user.isAuthenticated && <div className="mb-4 md:mb-6">
                <span className="text-foreground"> You are already loged in but you can switch to another account </span>
            </div>}
          <h1 className="text-2xl font-bold mb-6">Sign in</h1>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
