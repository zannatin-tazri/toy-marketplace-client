import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
const HorseDetails = () => {
    const [horseDetails, setHorseDetails] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-amber-gamma.vercel.app/horse')
            .then(res => res.json())
            .then(data => setHorseDetails(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Horse Details</h1>
            {
                horseDetails.map(horseDetail => <div className="grid grid-row-3 mt-5"
                    key={horseDetail.id}>
                    <div className="card w-100% bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={horseDetail.Picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className=" text-4xl card-title">{horseDetail.Name}</h2>
                            <h2 className='mt-10 font-bold text-2xl'>Seller : {horseDetail.SellerName}</h2>
                            <p className='font-semibold'>Description : {horseDetail.Description}</p>
                            <h3 className=' text-xl font-semibold'>Available Quantity : {horseDetail.AvailableQuantity}</h3>
                            <p className='font-semibold'>Contact to purchase : {horseDetail.SellerEmail}</p>
                            <h3 className='font-semibold'>Price : {horseDetail.Price}</h3>
                            <p>Ratings : {horseDetail.Rating}</p>
                            <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>

                            
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default HorseDetails;