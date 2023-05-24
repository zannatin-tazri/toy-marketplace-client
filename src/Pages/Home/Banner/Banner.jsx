import img1 from '../../../../public/img1.webp';
import img2 from '../../../../public/img2.jpg';
import img3 from '../../../../public/img3.jpg';
import img4 from '../../../../public/img4.jpg';
import img5 from '../../../../public/img5.jpeg';
const Banner = () => {
    return (
        <div className='flex text-center m-6 p-8 gap-6 md:flex-none'>
            <div className=" carousel rounded-box max-w-md max-h-96 flex-1 w-64 ">
                <div className="carousel-item">
                    <img src={img1} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={img4} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={img5} alt="" />
                </div>
            </div>
            <div className='flex-1 w-32 mt-16'>
                <h2 className='font-bold text-2xl mb-8'>Furry Friends Bazaar: A Haven for Animal Lovers!</h2>
                <p>Delight Your Furry Friends with Irresistible Toys and Treats. <br />

                    Discover a world of joy and excitement for your beloved pets at Furry Friends Bazaar. From engaging toys to delectable treats, we offer a
                    delightful assortment that will bring tail-wagging happiness to your furry companions.</p>
            </div>
        </div>
    );
};

export default Banner;