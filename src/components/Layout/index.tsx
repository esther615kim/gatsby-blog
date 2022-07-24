import React from "react"

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div> 
            <h4>✨Header Menu ✨</h4>
            <section>{children}</section>
        </div>

    )
}

export default Layout;