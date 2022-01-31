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

    const getImageContainerClassName = (): string => {
        switch(props.size) {
        case 'S':
            return 'img-container--small';
        case 'M':
            return 'img-container--medium';
        case 'L':
            return 'img-container--large';
        case 'XL':
            return 'img-container--x-large';
        case 'XXL':
            return 'img-container--xx-large';
        case 'XXXL':
            return 'img-container--xxx-large';
        }
    };

    const getImageHeightAndWidth = (): number => {
        switch(props.size) {
        case 'S':
            return 81;
        case 'M':
            return 86;
        case 'L':
            return 91;
        case 'XL':
            return 96;
        case 'XXL':
            return 101;
        case 'XXXL':
            return 106;
        }
    };

    return (
        <div>
            <Link href={props.href}>
                <a>
                    <div className={getContainerClassName()}>
                        <div className={getImageContainerClassName()}>
                            <Image
                                className='circular-img'
                                height={getImageHeightAndWidth()}
                                width={getImageHeightAndWidth()}
                                src={props.image}
                                alt={props.alt_text}
                            />
                        </div>
                        <div className='header-container hover:underline'>
                            <p>{props.title}</p>
                        </div>
                        <div className='display-divider'/>
                        <div className='description-container'>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Display;