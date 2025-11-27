import * as React from 'react'
import { DataContext } from '@/context/dataContext'
import { Pagination } from "./pagination";
import { InitialEmailLoader } from './initialEmailLoader';
import Inbox from './inbox';
import type { SingleToken } from '@/utils/type';

export const Email:React.FC<{activeToken:SingleToken}> = ({activeToken}) => {
    
    const {email,paginationLength, loaders, pageNumber, actions:{fetchEmail,changePageNumber}} = React.useContext(DataContext);
    
    return <main className='px-4 py-6'>
        {
            email.length === 0 ? <InitialEmailLoader/> :  <Inbox email={email} isEmailLoading={loaders.isEmailDataLoading}/>
        }  
        <div>
            <Pagination
                paginationLength={paginationLength}
                pageNumber={pageNumber}
                changePageNumber={changePageNumber}   
                activeToken={activeToken} 
                fetchEmail={fetchEmail}
            />
        </div>
    </main>
}