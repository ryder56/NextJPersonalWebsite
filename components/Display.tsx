import Link from 'next/link';
import Image from 'next/image';

type Props = {
    size: 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
    title: string;
    href: string;
    description: string;
    image: StaticImageData;
    alt_text: string;
}

const Display = (props: Props) => {

    const getContainerClassName = (): string => {
        switch(props.size) {
        case 'S':
            return 'display-container--small';
        case 'M':
            return 'display-container--medium';
        case 'L':
            return 'display-container--large';
        case 'XL':
            return 'display-container--x-large';
        case 'XXL':
            return 'display-container--xx-large';
        case 'XXXL':
            return 'display-container--xxx-large';
        }
    };

    return (
        <div>
            <Link href={props.href}>
                <a>
                    <div className={getContainerClassName()}>
                        <div className='img-container'>
                            <Image
                                className='circular-img'
                                height={66}
                                width={66}
                                src={props.image}
                                alt={props.alt_text}
                            />
                        </div>
                        <div className='header-container'>
                            <a>{props.title}</a>
                        </div>
                        <div className='display-divider'/>
                        <div className='description-container'>
                            <a>{props.description}</a>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Display;