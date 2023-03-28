import React, { useEffect } from 'react'
import { useState } from 'react'
import BookDesignCatalogue from '../../Components/BookDesignCatalogue/BookDesignCatalogue'
import Header from '../../Components/Header/Header'
import { GetAllBookApi } from '../../Services/DataServices/DataServices'
import '../Dashboard/Dashboard.css'

function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {
        GetAllBookApi()
            .then((response) => {
                console.log(response)
                setData(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("All Book Retrives Successfully")
    }, [])

    return (
        <>
            <div className="DashboardMainContainer">
                <Header />
                <div className="DashboardBelowHeader">
                    <div className="DashboardLeftBelowHeader">
                        <div className="DashboardTitleLeftBelowHeader">
                            Books
                        </div>
                        <div className="DashboardCountLeftBelowHeader">
                            (100 items)
                        </div>
                    </div>
                    <div className="DashboardRightBelowHeader">
                        <select className='DashboardSelectorRightBelowHeader' >
                            <option value="sort by relevance">Sort by relevance</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="What's New">What's New</option>
                            <option value="Popularity">Popularity</option>
                            <option value="Better Discount">Better Discount</option>
                            <option value="Customer Rating">Customer Rating</option>
                        </select>
                    </div>
                </div>

                <div className="GetAllBooks">
                    {
                        data.map((book) => (<BookDesignCatalogue book={book} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard