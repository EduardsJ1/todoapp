import React from 'react'

const MainLayot = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='max-w-[1200px] px-5 md:px-10 m-auto'>
      {children}
    </div>
  )
}

export default MainLayot
