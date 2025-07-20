import React from 'react'

const MainLayot = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={`max-w-[1200px] px-5 md:px-10 m-auto ${className}`}>
      {children}
    </div>
  )
}

export default MainLayot
