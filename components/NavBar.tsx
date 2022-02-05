import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ninja_one from '../public/ninja-transparent-15.png';
import ninja_two from '../public/ninja-transparent-17.png';

const NavBar = () => {

    const router = useRouter();

    return (
        <div className='container mx-auto h-16 bg-indigo-900 rounded-md opacity-95 z-50'>
            <div className='img-center inline-flex w-5% justify-start'>
                <Image
                    height={52}
                    width={52}
                    src={ninja_one}
                    alt='Ninja Image'
                />
            </div>
            <ul className='navlink self-middle w-90%'>
                <li className={router.asPath === '/' ? 'navlink-active' : ''}>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li className={router.asPath === '/projects/' ? 'navlink-active' : ''}>
                    <Link href='/projects'>
                        Projects
                    </Link>
                </li>
                <li className={router.asPath === '/fun-fact/' ? 'navlink-active' : ''}>
                    <Link href='/fun-fact'>
                        Fun Facts!
                    </Link>
                </li>
            </ul>
            <div className='img-center inline-flex w-5% justify-end'>
                <Image
                    height={52}
                    width={52}
                    src={ninja_two}
                    alt='Ninja Image'
                />
            </div>
        </div>
    );
};

export default NavBar;