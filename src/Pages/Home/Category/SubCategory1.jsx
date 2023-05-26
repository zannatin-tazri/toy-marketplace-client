
import { useEffect, useState } from "react";


const SubCategory1 = () => {
    const [subCategories1, setSubCategories ]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/teddyBear')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
    },[])
    return (
        <div>
            <h3>hi1</h3>
        </div>
    );
};

export default SubCategory1;