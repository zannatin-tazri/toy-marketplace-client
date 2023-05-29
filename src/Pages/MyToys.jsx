import img1 from '../../public/cat.jpeg'
import img2 from '../../public/dog.jpg'
import img3 from '../../public/rabit.webp'
import img4 from '../../public/bird.jpg'
import img5 from '../../public/cat2.webp'
import img6 from '../../public/dog2.jpg'
import img7 from '../../public/rabit2.jpg'
import img8 from '../../public/dog3.webp'


const MyToys = () => {
    return (
        <div className='p-6'>
            < hr />
            <h1 className='font-bold text-6xl text-center mb-6 mt-8'>My Toys</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                        
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img1} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">10</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                19.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        {/* row 2 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img2} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">16</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                18.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        {/* row 3 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img3} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">14</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                17.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        {/* row 4 */}
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img4} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">22</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                21.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img5} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">16</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                12.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img6} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">20</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                22.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img7} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">18</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                15.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>
                        <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img8} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">16</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                29.99$
                               
                            </td>
                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                            
                        </tr>




                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;