import type { NextPage } from 'next';
import Display from '../components/Display';
import NavBar from '../components/NavBar';
import code from '../public/code.jpg';

const Home: NextPage = () => {
    return (
        <div className="container mx-auto full-screen">
            <div className='flex mx-auto w-full fixed z-50'>
                <NavBar/>
            </div>
            <div className='container mx-auto pt-5% pl-5% pr-5%'>
                <div className='grid grid-cols-3 grid-flow-row gap-10 content-even place-items-center'>
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                    <Display
                        size='M'
                        title='This is a title'
                        href='/'
                        description='Sample description :)'
                        image={code}
                        alt_text='code image'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
