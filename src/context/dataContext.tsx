import * as React from 'react'
import { createContext } from "react";
import type { mailResponseType, User, Token, Error, urlType } from '@/utils/type';

type propsType = {
    children: React.ReactElement,
}

const domain = ''

const urlRoutes: urlType = {
    emailUrl:`${domain}/api/email/read`,
    userUrl: `${domain}/api/user`,
    userLoginUrl:`${domain}/api/user/login`,
    userLogOutUrl:`${domain}/api/user/logout`,
    userToken:`${domain}/api/email/token`,
}

type contexDataType = {
    email:mailResponseType[];
    user:User;
    isUserDataLoading:boolean;
    tokens:Token;
    pageNumber:number,
    paginationLength:number,
    errors : {
        userError:Error;
        tokenError:Error;
        emailError:Error;
    },
    loaders: {
        isUserDataLoading:boolean;
        isEmailDataLoading:boolean;
        isTokenDataLoading:boolean;
    }
    actions: {
        fetchEmail : (pageNumber:number,pageToken:string | void) => void;
        logOutUser: () => void;
        loginUser: () => Promise<Error | void>;
        fetchToken :() => Promise<Error | void>;
        changePageNumber:(newPageNumber:number) => void;
    }
}

export const DataContext = createContext<contexDataType>({ 
    email:[],
    isUserDataLoading:true,
    user:{isAuthenticated:false,emailAddress:undefined, messagesTotal:undefined}, 
    pageNumber:1,
    paginationLength:0,
    tokens:{
        status:'pending',
        data:[],
    },
    errors:{
        userError:{error:'', message:''},
        tokenError:{error:'', message:''},
        emailError:{error:'', message:''}
    },
    loaders:{
        isEmailDataLoading:true,
        isUserDataLoading:true,
        isTokenDataLoading:true,
    },
    actions: {
        fetchEmail: async () => {},
        loginUser:async () =>  {},
        logOutUser: async  () => {},
        fetchToken: async () => {},
        changePageNumber:() => {},
    } 
});


export const  DataContextComponent= ({children}:propsType) => {
    
    // email,token and user information
    const [email,setEmail] = React.useState<mailResponseType[]>([]);
    const [user,setUser] = React.useState<User>({isAuthenticated:false,emailAddress:undefined, messagesTotal:undefined});
    const [tokens,setTokens] = React.useState<Token>({
        status:'pending',
        data: [],
    });

    // errors
    const [userError,setUserError] = React.useState<Error>({error:'',message:''});
    const [tokenError,setTokenError] = React.useState<Error>({error:'',message:''});
    const [emailError,setEmailError] = React.useState<Error>({error:'', message:''});
    
    // pagination pageNumber and total page length 
    const [pageNumber,setPageNumber] = React.useState(1);
    const [paginationLength,setPaginationLength] = React.useState(0);
    // loading state 
    const [isUserDataLoading,setUserDataLoaing] = React.useState(true);
    const [isEmailDataLoading,setEmailDataLoading] = React.useState(true);
    const [isTokenDataLoading,setTokenDataLoading] = React.useState(true);

    
    // fetch user
    const fetchUser = async () => {
        try {
            setUserDataLoaing(true);
            const response = await fetch(urlRoutes.userUrl, {
                credentials:'include',
                headers:{
                    'Content-Type':'application/json',
                }
            });
            setUserDataLoaing(false);
            if(response.status == 401) {
                const data:Error = await response.json();
                setUserError(data);
                return data;

            }
            const data:User = await response.json();
            setUser(data);
        } catch (e) {
            setUserDataLoaing(false);
            const errorData:Error = {error:'crushed', message:'Server crushed'};
            setUserError(errorData)
            return errorData;
        }
    }

    const loginUser = async ():Promise<Error | undefined> => {
        try {
            setUserDataLoaing(true);
            const response = await fetch(urlRoutes.userLoginUrl, {
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json',
                }
            });
            setUserDataLoaing(false)

            if(response.status !== 200) {
                const data:Error = await response.json();
                setUserError(data);
                return data;

            }
            // here data is url
            const data:{url:string} = await response.json();
            console.log(data);
            window.location.href = data.url;
        } catch (e) {
            setUserDataLoaing(false);
            console.log(e);
            const errorData:Error = {error:'crushed', message:'Server crushed'};
            setUserError(errorData);
            return errorData;
        }
    }

    // fetch token
    const fetchToken = async () => {
        try {
            setTokenDataLoading(true);
            const response = await fetch(urlRoutes.userToken, {
                credentials:'include',
                headers:{
                    'Content-Type':'application/json',
                }
            });
            setTokenDataLoading(false);

            if(response.statusText !== 'OK') {
                const data:{error:string,message:string} = await response.json();
                setTokenError(data);
                return data;
            }
            const data:Token = await response.json();
            setTokens(data);
        } catch (e) {
            setTokenDataLoading(false);
            const errorData:Error = {error:'crushed', message:'Server crushed'};
            setTokenError(errorData);
            return errorData;
        }
    }

    // fetch email
    const fetchEmail = async (pageNumber:number, pageToken: string | void ):Promise<Error | null> => {
        
        let url = pageToken === undefined ? urlRoutes.emailUrl+`?page=${pageNumber}&length=30` : 
        urlRoutes.emailUrl+`?page=${pageNumber}&pageToken=${pageToken}&length=30`;
        try {
            setEmailDataLoading(true);
            const response = await fetch(url,{
                credentials:'include',
            });
            setEmailDataLoading(false);
            if(response.status !== 200) {
                const responseError:Error = await response.json();
                setEmailError(responseError);
                return responseError;
            }
            const result:{data:mailResponseType[], success:string, totalMessages:number,pageToken:string } = await response.json();
            
            setPaginationLength(result.totalMessages);
            setEmail(result.data); 
            
            return null; 
        } catch (e) {
            setEmailDataLoading(false);
            const errorData:Error=  {error:'some thing goes wrong', message:'request failed!'};
            setEmailError(errorData);
            return errorData;
        }
    }

    const logOutUser = async () => {
        try {
            setUserDataLoaing(true);
            const response = await fetch(urlRoutes.userLogOutUrl, {
                method:'POST',
                credentials:'include',
            });
            setUserDataLoaing(false);
            if(response.status === 200) {
                setUser({
                    ...user,
                    isAuthenticated:false,
                    emailAddress:undefined,
                    messagesTotal:undefined,
                })
                setUserError({
                    error:'',
                    message:'',
                })
            }
        } catch (e) {
            setUserDataLoaing(false);
            setUserError({
                error:'failed',
                message:'Code failed',
            })
            console.log(e);
        }
    }

    // change pageNumber
    const changePageNumber = (newPageNumber:number) => {
        setPageNumber(newPageNumber)
    }

    React.useEffect(() => {

        const timer = setInterval(() => {
            if (tokens.status === "loaded") {
                clearInterval(timer);
                return;
            }

            if (user.isAuthenticated) {
                fetchToken();
            }
        }, 4000);

        return () => clearInterval(timer);
    }, [user.isAuthenticated, tokens.status]);

    React.useEffect(() => {
        fetchToken();
        fetchUser();
    }, []);


    return <DataContext value={{
        email,
        isUserDataLoading,
        pageNumber,
        paginationLength,
        user,
        tokens,
        errors: {
            userError,
            tokenError,
            emailError
        },
        loaders: {
            isEmailDataLoading,
            isUserDataLoading,
            isTokenDataLoading,
        },
        actions: {
            fetchEmail,
            logOutUser,
            loginUser,
            fetchToken,
            changePageNumber
        }
    
    }}>
        {children}
    </DataContext>
}