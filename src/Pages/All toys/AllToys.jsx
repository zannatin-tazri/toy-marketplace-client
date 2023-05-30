
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const AllToys = () => {
    const [allToys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-amber-gamma.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setAlltoys(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-3">All Toys Are Here</h1>
            <div className='grid grid-cols-3'>
        
        {
            allToys.map(allToy => <div className=" m-6"
                key={allToy.id}>
                <div className="card card-side bg-base-200 shadow-2xl">
                    <figure className=''><img className="w-48 h-40 p-5" src={allToy.Picture} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{allToy.Name}</h2>
                        <p className="text-xl font-semibold">Price : {allToy.Price}</p>
                        <p className="text-md decoration-gray-300 font-semibold">Ratings : {allToy.Rating}</p>
                        <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>
                        <div className="card-actions justify-end">
                        <Link to='/allToysDetails'><button className="btn btn-outline btn-warning ">
                                View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
        </div>
        
    );
};

export default AllToys;