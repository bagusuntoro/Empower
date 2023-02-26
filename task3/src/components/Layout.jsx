import { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Layout = ({children}) =>{
    const [auth, setAuth] = useState({name:'', email:''})

    useEffect(()=>{
        setTimeout(()=>{
            setAuth({
                name:'Bagus Untoro',
                email:'bagusuntoro@bank-indonesia.com'
            })
        }, 3000)
    },[])
    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}