import type { NextPage } from 'next';
import Display from '../components/Display';
import NavBar from '../components/NavBar';
import * as prop_constants from '../util/propConstants';

const Projects: NextPage = () => {
    return (
        <div className="container mx-auto full-screen">
            <div className='flex mx-auto w-full fixed z-50'>
                <NavBar/>
            </div>
            <div className="container mx-auto pt-5% pl-5% pr-5% text-center">
                <h1 className="text-4xl font-semibold">
                    Projects
                </h1>
                <h3 className="text-large">
                    Below are some projects that I mark as some of my favorite things I have had the opportunity to work on. <br/>
                    The list is not comprehensive and some of the projects are from when I was newer to programming, however <br/>
                    they show the rapid growth I have been able to make as I have learned new technologies and techniques. <br/>
                    To see all of my projects that I have shared go see my <a
                        href="https://github.com/ryder56"
                        className="underline hover:text-white"
                    >github</a>.
                </h3>
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

export default Projects;
