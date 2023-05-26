import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react";

const SubCategory2 = () => {
    const [subCategories2, setSubCategories2] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/horse')
            .then(res => res.json())
            .then(data => setSubCategories2(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Horse</h1>
            {
                subCategories2.map(subCategory2 => <div className="grid grid-row-3 mt-5"
                    key={subCategory2.id}>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-80 h-64 rounded p-5" src={subCategory2.Picture} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{subCategory2.Name}</h2>
                            <p className="text-xl font-semibold">Price : {subCategory2.Price}</p>
                            <p className="text-md decoration-gray-300 font-semibold">Ratings : {subCategory2.Rating}</p>
                            <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-warning">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SubCategory2;