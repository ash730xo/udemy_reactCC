import React from "react";
import Search from "../../components/search";

const dummydata = 'dummydata'

const Homepage = () => {
    const getDataFromSearchComponent = (getData) => {
        console.log(getData, 'getData')
    }

    return (
        <div className="Homepage">
            <Search getDataFromSearchComponent = {getDataFromSearchComponent} dummydata= {dummydata} />
        </div>
    )
}

export default Homepage