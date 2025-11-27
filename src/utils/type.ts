
export type mailResponseType = {
    id:number;
    subject:string;
    date:string;
    from:string;
    body:string;
    pageToken:string;
    messageId:string;
    isRead:boolean
}

export type User = {
    isAuthenticated:boolean,
    emailAddress:string | undefined,
    messagesTotal:number | undefined,
}

export type urlType = {
    emailUrl:string;
    userUrl:string;
    userLogOutUrl:string;
    userLoginUrl:string;
    userToken:string;
}

export type Token = {
    status : 'pending' | 'loaded';
    data: Array<{nextPageToken:string, length:number}>
}

export type SingleToken = {
    nextPageToken:string;
    length:number;
}


export type Error = {
    error:string
    message:string;
}