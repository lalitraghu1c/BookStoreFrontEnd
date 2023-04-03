import React from 'react';
import '../Header/Header.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

function Header() {
    return (
        <>
            <div className="HeaderMainContainer">
                <div className="HeaderBookStoreLogo">
                <img style={{ width: '60px' }} src="https://img.freepik.com/premium-vector/reading-line-icon-bookstore-logo-open-book-book-sticker-logo-icon-vector-library-sign-education-educational-symbol-vector-isolated-background-eps-10_399089-1081.jpg?w=2000" alt="" />
                </div>
                <div className="HeaderText">
                    Bookstore
                </div>
                <div className="MiddleSecheader">
                    <div className='iconSearch'><Button> <SearchIcon style={{ color: '#5f6368' }} /> </Button></div>
                    <div className='input'><InputBase placeholder="Search ..." /></div>
                </div>
                <div className="Profile">
                    <Button> <PersonOutlinedIcon style={{ color: '#ffff' }}/> </Button>
                    <div className="textProfile">
                        Profile
                    </div>
                </div>
                <div className="Cart">
                    <Button> <ShoppingCartOutlinedIcon style={{ color: '#ffff' }}/></Button>
                    <div className="textProfile">
                        Cart
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;