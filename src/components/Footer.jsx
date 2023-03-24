import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className='text-center text-lg-left'>
            <div className='text-center p-3' style={{ background: '#0A0C0E' , position:'fixed',left:'0',bottom:'0',right:'0',lineHeight:'15px',color:"white"} }>
                &copy; {new Date().getFullYear()} Copyright:{' '}<br/>
                <div style={{color:"white"}}> All CopyRights Reserved</div>
                
            </div>
        </footer>
    </div>
  )
}

export default Footer
