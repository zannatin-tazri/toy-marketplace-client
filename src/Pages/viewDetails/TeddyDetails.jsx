import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

const TeddyDetails = () => {
    const [teddyDetails, setTeddyDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/teddy')
            .then(res => res.json())
            .then(data => setTeddyDetails(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-4">Teddy Bear Details</h1>
            {
                teddyDetails.map(teddyDetail => <div className="grid grid-row-3 mt-5"
                    key={teddyDetail.id}>
                    <div className="card w-100% bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={teddyDetail.Picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className=" text-4xl card-title">{teddyDetail.Name}</h2>
                            <h2 className='mt-10 font-bold text-2xl'>Seller : {teddyDetail.SellerName}</h2>
                            <p className='font-semibold'>Description : {teddyDetail.Description}</p>
                            <h3 className=' text-xl font-semibold'>Available Quantity : {teddyDetail.AvailableQuantity}</h3>
                            <p className='font-semibold'>Contact to purchase : {teddyDetail.SellerEmail}</p>
                            <h3 className='font-semibold'>Price : {teddyDetail.Price}</h3>
                            <p>Ratings : {teddyDetail.Rating}</p>
                            <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>

                            
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TeddyDetails;