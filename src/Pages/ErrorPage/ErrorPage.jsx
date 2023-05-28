import { Link } from 'react-router-dom';
import image from '../../../public/error.avif'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <img className='scroll-ms-6 h-80 w-80' src={image} alt="" />
            
            <Link to='/' className='btn btn-warning'> <h1> Back To Home </h1></Link>
        </div>
    );
};

export default ErrorPage;