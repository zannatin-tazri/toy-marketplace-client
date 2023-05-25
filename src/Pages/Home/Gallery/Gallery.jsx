import img1 from '../../../../public/cat.jpeg'
import img2 from '../../../../public/dog.jpg'
import img3 from '../../../../public/rabit.webp'
import img4 from '../../../../public/bird.jpg'
import img5 from '../../../../public/cat2.webp'
import img6 from '../../../../public/dog2.jpg'
import img7 from '../../../../public/rabit2.jpg'
import img8 from '../../../../public/dog3.webp'
import img9 from '../../../../public/rabit3.jpg'
import img10 from '../../../../public/rabit4.jpg'
import img11 from '../../../../public/panda.jpg'
import img12 from '../../../../public/panda2.webp'

const Gallery = () => {
    return (
        <div className='p-6'>
            < hr />
            <h1 className='font-bold text-6xl text-center mb-6 mt-8'>Toy Gallery</h1>
            <p className=' text-sm text-center mb-14 '>From engaging toys to delectable treats, 
                we offer a delightful assortment that will bring tail-wagging happiness to your furry companions.
                From engaging toys to delectable treats, 
                we offer a delightful assortment that will bring tail-wagging happiness to your furry companions.</p>
            <div className="grid grid-cols-3 gap-6 ">
                
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img1} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80 ' src={img2} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80'src={img12} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img4} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img5} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img6} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img7} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img8} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img9} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img10} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img3} alt="" />
                  <img className='border border-yellow-300 rounded h-80 w-80' src={img11} alt="" />

                
            </div>
        </div>
    );
};

export default Gallery;