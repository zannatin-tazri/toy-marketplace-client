import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react";


const AllToysDetails = () => {
    const [allToysDetails, setAlltoysDetails] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-amber-gamma.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setAlltoysDetails(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
        <h1 className="text-center text-4xl font-bold my-3">All Toys Are Here</h1>
        <div className='grid grid-row-3'>
    
    {
        allToysDetails.map(allToysDetail => <div className=" m-6"
            key={allToysDetail.id}>
            <div className="card card-side bg-base-200 shadow-2xl">
                <figure className=''><img className="w-48 h-40 p-5" src={allToysDetail.Picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{allToysDetail.Name}</h2>
                    <h2 className=" text-sm font-semibold">{allToysDetail.Description}</h2>
                    <h2 className=" text-md font-bold">Seller : {allToysDetail.SellerName}</h2>
                    <h2 className=" text-md font-bold">Available Quantity : {allToysDetail.AvailableQuantity}</h2>
                    <h2 className=" text-md font-bold">Contact To Purchase : {allToysDetail.SellerEmail}</h2>
                    <p className="text-sm font-semibold">Price : {allToysDetail.Price}</p>
                    <p className="text-md decoration-gray-300 font-semibold">Ratings : {allToysDetail.Rating}</p>
                    <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>
                    
                </div>
            </div>
        </div>)
    }
</div>
    </div>
    );
};

export default AllToysDetails;