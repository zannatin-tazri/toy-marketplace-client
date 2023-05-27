import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const SubCategory3 = () => {
    const [subCategories3, setSubCategories3] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setSubCategories3(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Dinosaur</h1>
            {
                subCategories3.map(subCategory3 => <div className="grid grid-row-3 mt-5"
                    key={subCategory3.id}>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-80 h-64 rounded p-5" src={subCategory3.Picture} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{subCategory3.Name}</h2>
                            <p className="text-xl font-semibold">Price : {subCategory3.Price}</p>
                            <p className="text-md decoration-gray-300 font-semibold">Ratings : {subCategory3.Rating}</p>
                            <p><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></p>
                            <div className="card-actions justify-end">
                                <Link to='/dinosaur'><button className="btn btn-outline btn-warning ">
                                    View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SubCategory3;