import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const SubCategory1 = () => {
    const [subCategories1, setSubCategories1] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-amber-gamma.vercel.app/teddy')
            .then(res => res.json())
            .then(data => setSubCategories1(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Teddy Bears</h1>
            {
                subCategories1.map(subCategory1 => <div className="grid grid-row-3 mt-5"
                    key={subCategory1.id}>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-80 h-64 rounded p-5" src={subCategory1.Picture} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{subCategory1.Name}</h2>
                            <p className="text-xl font-semibold">Price : {subCategory1.Price}</p>
                            <p className="text-md decoration-gray-300 font-semibold">Ratings : {subCategory1.Rating}</p>
                            <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>
                            <div className="card-actions justify-end">
                            <Link to='/teddy'><button className="btn btn-outline btn-warning ">
                                    View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SubCategory1;