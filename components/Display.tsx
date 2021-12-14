import Link from 'next/link';
import Image from 'next/image';

type Props = {
    title: string;
    href: string;
    description: string;
    image: StaticImageData;
    alt_text: string;
}

const Display = (props: Props) => {
    return (
        <div>
            <Link href={props.href}>
                <a>
                    <div className='display-container'>
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