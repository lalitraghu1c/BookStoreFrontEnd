import React from 'react'
import '../BookDesignCatalogue/BookDesignCatalogue.css'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";


function BookDesignCatalogue(props) {
    let navigate=useNavigate();
    const openToBookBox2=()=>{
        const book_Id = props.book.book_Id;
        localStorage.setItem("book_Id", JSON.stringify(book_Id))
        navigate('/BookSummary')
    }
    return (
        <>
            <div className="BookCatalogueMainContainer" onClick={openToBookBox2}>
                <div className="BookImage">
                    <img src={props.book.bookImage} height="70%" width="55%" alt="" />
                </div>
                <div className="BookDetails">
                    <div className="BookTitle">
                        {props.book.bookName}
                    </div>
                    <div className="AuthorName">
                        {props.book.authorName}
                    </div>
                    <div className="BookRatingCount">
                        <div className="BookRating">{props.book.rating}<StarIcon fontSize="xxsmall" style={{ color: '#F5F5F5', marginLeft: '2px' }} /></div>
                        <div className="BookCount">({props.book.bookCount})</div>
                    </div>
                    <div className='Price'>
                        <div className="DiscountPrice">Rs. {props.book.discountPrice}</div>
                        <div className="OriginalPrice">Rs. {props.book.originalPrice}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDesignCatalogue