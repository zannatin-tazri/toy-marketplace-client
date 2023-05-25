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
        <div className='p-5'>
            <div className="grid grid-cols-3 gap-6 ">
                
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img1} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80 ' src={img2} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80'src={img12} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img4} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img5} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img6} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img7} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img8} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img9} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img10} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img3} alt="" />
                  <img className='border border-indigo-600 rounded h-80 w-80' src={img11} alt="" />

                
            </div>
        </div>
    );
};

export default Gallery;