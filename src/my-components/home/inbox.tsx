import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Alert,AlertTitle } from '@/components/ui/alert';
import { Mail, Search } from "lucide-react";
import { EmailItem} from './emailItem';
import type { mailResponseType } from '@/utils/type';


export const  EmailSearch = () => {
    return <div className="flex items-center mb-3 md:mb-0 md:justify-between">
        <h1 className="text-lg md:text-3xl font-bold flex items-center gap-2">
          <Mail className="w-7 h-7" />Check your old Emails
        </h1>
        {/* it is hidden as we don't have any search feature yet */}
        <div className="hidden gap-2 items-center w-full max-w-sm">
          <Search className="absolute ml-3 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search emails..."
            className="pl-9 shadow-sm"
          />
        </div>
      </div>
}

const Inbox:React.FC<{email:mailResponseType[], isEmailLoading:boolean,}> = ({email,isEmailLoading}) => {
    return <>
        <div className='md:mb-6'>
            <EmailSearch/>
        </div>
        {
            isEmailLoading && <div className="bg-blue-50 py-3 px-4 md:px-6 shadow-sm border text-center md:text-left">
                <Alert variant="default">
                    <AlertTitle className="text-blue-700 text-xl md:text-2xl">
                        Loading...
                    </AlertTitle>
                </Alert>
            </div>
        }
        <div className='mb-6'>
            {
                email.map((item)=> {
                    return <EmailItem key={item.date} {...item}/>
                })
            }
        </div>
    </>
}

export default Inbox;