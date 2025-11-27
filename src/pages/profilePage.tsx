import React from "react";
import ProfileCard from "@/my-components/profile/profileCard";
import UnauthorizedProfileCard from "@/my-components/profile/unAuthorizedProfleCard";
import { DataContext } from "@/context/dataContext";
import { FullScreenSpinner } from "@/my-components/home/fullPageLoader";


const Profile: React.FC = () => {
    
    const {user,actions,isUserDataLoading} = React.useContext(DataContext);
    
    if(isUserDataLoading) {
        return <FullScreenSpinner/>
    }
    
    return user.isAuthenticated ? <ProfileCard user={user} logoutUser={actions.logOutUser} /> : <UnauthorizedProfileCard/>
};

export default Profile;
