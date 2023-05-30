import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";

const DinosaurDetails = () => {
    const [dinosaurDetails, setDinosaurDetails] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-amber-gamma.vercel.app/toys')
            .then(res => res.json())
            .then(data => setDinosaurDetails(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Dinosaur Details</h1>
            {
                dinosaurDetails.map(dinosaurDetail => <div className="grid grid-row-3 mt-5"
                    key={dinosaurDetail.id}>
                    <div className="card w-100% bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={dinosaurDetail.Picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className=" text-4xl card-title">{dinosaurDetail.Name}</h2>
                            <h2 className='mt-10 font-bold text-2xl'>Seller : {dinosaurDetail.SellerName}</h2>
                            <p className='font-semibold'>Description : {dinosaurDetail.Description}</p>
                            <h3 className=' text-xl font-semibold'>Available Quantity : {dinosaurDetail.AvailableQuantity}</h3>
                            <p className='font-semibold'>Contact to purchase : {dinosaurDetail.SellerEmail}</p>
                            <h3 className='font-semibold'>Price : {dinosaurDetail.Price}</h3>
                            <p>Ratings : {dinosaurDetail.Rating}</p>
                            <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>

                            
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DinosaurDetails;