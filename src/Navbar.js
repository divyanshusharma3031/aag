import React from 'react'
import "./Navbar.css"
const infoList=["All","Valentine","Baby","Ring Platter","Birthday","PhotoAlbum"];
const Navbar = (props) => {
    return (
        <>
            <nav className='navbar1'>
                <div className="btn-group1">
                    {infoList.map((curEle) => {
                        return (
                            <button key={curEle}className="btn-group-item1" onClick={() => props.filterItem(curEle)}>{curEle}</button>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Navbar