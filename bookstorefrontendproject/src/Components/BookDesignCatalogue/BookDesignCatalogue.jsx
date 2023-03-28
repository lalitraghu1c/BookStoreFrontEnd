import React from 'react'
import '../BookDesignCatalogue/BookDesignCatalogue.css'
import BookImage from '../../Images/BookImage/1.jpeg'

function BookDesignCatalogue(props) {
    return (
        <>
            <div className="BookCatalogueMainContainer">
                <div className="BookImage">
                    <img src={BookImage} height="100%" width="100%" alt="" />
                </div>
                <div className="BookDetails">
                    <div className="BookTitle">
                        {props.book.bookName}
                    </div>
                    <div className="AuthorName">
                        {props.book.authorName}
                    </div>
                    <div className="BookRatingCount">
                        <div className="BookRating">{props.book.rating}</div>
                        <div className="BookCount">{props.book.bookCount}</div>
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