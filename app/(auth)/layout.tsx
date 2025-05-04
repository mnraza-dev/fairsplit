import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='pt-24 flex items-center justify-center h-screen'>
            {children}
        </div>
    )
}

export default AuthLayout