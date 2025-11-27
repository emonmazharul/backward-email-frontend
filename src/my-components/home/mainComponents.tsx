import * as React from 'react'
import { Email } from './email'
import Sidebar from './sidebar'
import { DataContext } from '@/context/dataContext'
import type { SingleToken } from '@/utils/type';


const HomeComponent:React.FC  = () => {
  const {tokens,paginationLength,loaders,actions} = React.useContext(DataContext);
  const [activeToken,setActiveToken] = React.useState<SingleToken>({nextPageToken:'', length:0});
  
  const handleActiveToken = (token:SingleToken) => {
    setActiveToken(token);
  }

  React.useEffect(() => {
      if(tokens.data[0] ) {
        const token = tokens.data[0].nextPageToken;
        setActiveToken(tokens.data[0]);
        actions.fetchEmail(1, token);
      }
  }, [tokens.status]);

  return (
    <div className='flex-column md:flex md:justify-around mt-6 md:mt-8'>
      <div>
        <Sidebar
          isEmailDataLoading={loaders.isEmailDataLoading}
          paginationLength={paginationLength}
          isTokenDataLoading={loaders.isTokenDataLoading}
          tokens={tokens.data}
          activeToken={activeToken}
          handleActiveToken={handleActiveToken}
          fetchEmail={actions.fetchEmail}
          changePageNumber={actions.changePageNumber}
        />
      </div>
      <div className='text-center md:max-w-[70%]'>
        <Email  activeToken={activeToken}/>
      </div>
    </div> 
  )
}

export default HomeComponent;