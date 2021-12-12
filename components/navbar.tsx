import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ninja_one from '../public/ninja-transparent-15.png';
import ninja_two from '../public/ninja-transparent-17.png';

const NavBar = () => {

    const router = useRouter();
    console.error(router.asPath);

    return (
        <div className="container mx-auto h-16 align-middle">
            <div className='img-center'>
                <Image
                    height={52}
                    width={52}
                    src={ninja_one}
                    alt='?!'
                />
            </div>
            <ul className="navlink self-middle">
                <li className={router.asPath === '/' ? 'navlink-active' : ''}>
                    <Link href="/">
                        Home Page
                    </Link>
                </li>
                <li className={router.asPath === '/second-page' ? 'navlink-active' : ''}>
                    <Link href="/">
                        Home Page #2
                    </Link>
                </li>
            </ul>
            <div className='img-center'>
                <Image
                    height={52}
                    width={52}
                    src={ninja_two}
                    alt='?!'
                />
            </div>
        </div>
    );
};

export default NavBar;