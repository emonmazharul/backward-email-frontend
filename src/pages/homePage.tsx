import * as React from 'react'
import { DataContext } from '@/context/dataContext'
import { Unauthenticated } from '@/my-components/home/unAurhorizeCard'
import HomeComponent from '@/my-components/home/mainComponents'
import { FullScreenSpinner } from '@/my-components/home/fullPageLoader'
import { HomePageInfoDialog } from '@/my-components/home/infoDialog'


const HomePage:React.FC  = () => {
  const {user,loaders} = React.useContext(DataContext);

  if(loaders.isUserDataLoading) {
    return <FullScreenSpinner/>
  }
  return <>
    <HomePageInfoDialog/>
    {
    user.isAuthenticated ? 
      <HomeComponent/> : 
    <Unauthenticated/>
    }
  </>
}

export default HomePage;