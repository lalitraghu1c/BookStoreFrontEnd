import React from 'react'
import '../BookDesignCatalogue/BookDesignCatalogue.css'
import BookImage from '../../Images/BookImage/1.jpeg'

function BookDesignCatalogue() {
    return (
        <>
            <div className="BookCatalogueMainContainer">
                <div className="BookImage">
                    <img src={BookImage} height="100%" width="100%" alt="" />
                </div>
                <div className="BookDetails">
                    <div className="BookTitle">
                        Sanathan Dharma
                    </div>
                    <div className="AuthorName">
                        by Hindu
                    </div>
                    <div className="BookRatingCount">
                        <div className="BookRating">4.5</div>
                        <div className="BookCount">(100)</div>
                    </div>
                    <div className='Price'>
                        <div className="DiscountPrice">Rs. 250</div>
                        <div className="OriginalPrice">Rs. 500</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDesignCatalogue