import type { NextPage } from 'next';
import Display from '../components/Display';
import NavBar from '../components/NavBar';
import * as prop_constants from '../util/propConstants';

const Home: NextPage = () => {
    return (
        <div className="container mx-auto full-screen">
            <div className='flex mx-auto w-full fixed z-50'>
                <NavBar/>
            </div>
            <div className='container mx-auto pt-5% pl-5% pr-5%'>
                <div className='grid grid-cols-2 grid-flow-row gap-10 content-even place-items-center'>
                    {prop_constants.Covid_Visualizer_Display}
                    {prop_constants.Huffman_Compression_Display}
                    {prop_constants.R6_Character_Chooser_Display}
                    {prop_constants.Video_DMD_Display}
                    {prop_constants.Resume_Website_Display}
                </div>
            </div>
        </div>
    );
};

export default Home;
