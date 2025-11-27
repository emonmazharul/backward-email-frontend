// pages/Profile.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { User } from "@/utils/type";


type Props = {
  user:User;
  logoutUser: () => void;
}

const ProfileCard: React.FC<Props> = ({user,logoutUser}) => {

    return (
    <div className="min-h-screen px-4 md:px-0 flex justify-center items-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Profile
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">
              You are logged in 🎉
            </p>
            <p className="text-gray-500">
              You can now view your Gmail inbox.
            </p>
          </div>

          <hr />

          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">Your Email</p>
              <p className="font-medium text-gray-900">{user.emailAddress}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Total Messages</p>
              <p className="font-medium text-gray-900">{user.messagesTotal}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
            <Button onClick={logoutUser} className="bg-red-700 hover:bg-red-900">Logout</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileCard;
