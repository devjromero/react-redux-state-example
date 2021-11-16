
import { Link } from 'react-router-dom';
import NotFoundImage from './../../../resources/assets/media/backgrounds/errors/sad_face.svg';

 const _PublicNotFound = () => {
    return (
        <div className={'bg-blue-300 w-full h-screen flex flex-col justify-center items-center bg-figures'}>
            <img
                className={'object-cover w-1/2'}
                src = {NotFoundImage}
                alt = {'Not Found'}
            />
            <div className={''}>
                <Link to={'/'}>
                    <h3 className={'font-franklin font-black cursor-pointer text-white text-4xl animate-bounce'}>
                        OOOPS!
                    </h3>
                </Link>
            </div>
        </div>
    )
 }

export default _PublicNotFound;
