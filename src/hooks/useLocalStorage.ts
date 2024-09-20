import { useState } from "react"

export function useLocalStorage({key}:{key:string}): [string,(value:string)=>void]{

    const [localValue,setValue] = useState(()=>{
        return window.localStorage.getItem(key) || ""
    })

    const setLocalItem = (value:string) => {
        setValue(value);
        window.localStorage.setItem(key,value)
    }

    return [localValue,setLocalItem]
}