import { GET_GISTS } from '../types/user.types';


export const getGists = (username) =>{
    return {
        meta:{
            resource: "user",
            procedure: "getGists",
            payload: {
                parameters: { username },
                queryParameters:null,
                body:null
            }
        },
        type: GET_GISTS
    };
};