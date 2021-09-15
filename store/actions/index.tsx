import { getNotes, saveNote } from "../services"

export const noteSaving=()=>{
    return(dispatch:any)=>{
        dispatch(saveNote())
            .then((res: any)=>{
                
            })
            .catch((err: any)=>{

            })
    }
}

export const getSavedNotes=()=>{
    return(dispatch:any)=>{
        dispatch(getNotes())
            .then((res: any)=>{

            })
            .catch((err: any)=>{

            })
    }
}