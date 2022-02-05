import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Display from '../components/Display';
import NavBar from '../components/NavBar';
import { getTailwindContainerWidth } from '../util/functions';

import * as prop_constants from '../util/propConstants';
import * as c from '../util/constants';

const enum ScrollDirections {
    UP,
    DOWN,
    NONE
}

const Home: NextPage = () => {
    // vars to see if offset or window size changed
    const [isResized, setIsResized] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // scroll direction state
    const [yCoord, setYCoord] = useState(0);
    const [offsetDirection, setOffsetDirection] = useState(ScrollDirections.NONE);

    // states for styles
    const [introductionStyle, setIntroductionStyle] = useState({paddingTop: '0px'});
    const [educationStyle, setEducationStyle] = useState({paddingTop: '0px'});
    const [workExperienceStyle, setWorkExperienceStyle] = useState({paddingTop: '0px'});
    const [technologiesStyle, setTechnologiesStyle] = useState({paddingTop: '0px'});
    const [awardsStyle, setAwardsStyle] = useState({paddingTop: '0px'});
    const [contactInfoStyle, setContactInfoStyle] = useState({paddingTop: '0px'});

    // starting location for objects
    const [locs, setLocs] = useState({
        'navbar-bottom': 0,
        'introduction-section-bottom': 0,
        'introduction-section-top': 0,
        'education-section-bottom': 0,
        'education-section-top': 0,
        'work-experience-section-bottom': 0,
        'work-experience-section-top': 0,
        'technologies-section-bottom': 0,
        'technologies-section-top': 0,
        'awards-section-bottom': 0,
        'awards-section-top': 0,
        'contact-info-section-bottom': 0,
        'contact-info-section-top': 0
    });

    // previous paddings for objects
    const [currentPaddingVals, setCurrentPaddingVals] = useState({
        'introduction': 0,
        'education': 0,
        'work-experience': 0,
        'technologies': 0,
        'awards': 0,
        'contact-info': 0
    });

    // setup scroll listener
    useEffect(() => {
        const onScroll = () => setIsScrolled(true);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // setup resize listener
    useEffect(() => {
        const onWindowResize = () => setIsResized(true);
        // clean up code
        window.removeEventListener('resize', onWindowResize);
        window.addEventListener('resize', onWindowResize, {passive: true});
        return () => window.removeEventListener('resize', onWindowResize);
    }, []);

    // on offset change, move section content
    useEffect(() => {
        if (isScrolled) {
            setScrollDirection();
            setSectionLocations();
            scrollFunction();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isScrolled]);

    // on resize, change constants and recalculate locations
    useEffect(() => {
        if (isResized) {
            setSectionLocations();
            scrollFunction();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isResized]);

    /**
     * Sets the direction the user is currently scrolling in
     */
    const setScrollDirection = () => {
        const curYCoord = window.scrollY;
        if (curYCoord < yCoord) {
            setOffsetDirection(ScrollDirections.DOWN);
        } else if (curYCoord > yCoord) {
            setOffsetDirection(ScrollDirections.UP);
        } else {
            setOffsetDirection(ScrollDirections.DOWN);
        }
        setYCoord(curYCoord);
    };

    /**
     * Scroll function to move divs appropriately
     */
    const scrollFunction = (): void => {
        const [heightPixelOffset, comparisonPixelOffset] = getPixelOffsets();

        moveContent(heightPixelOffset, comparisonPixelOffset, 'introduction');
        moveContent(heightPixelOffset, comparisonPixelOffset, 'education');
        moveContent(heightPixelOffset, comparisonPixelOffset, 'work-experience');
        moveContent(heightPixelOffset, comparisonPixelOffset, 'technologies');
        moveContent(heightPixelOffset, comparisonPixelOffset, 'awards');
        moveContent(heightPixelOffset, comparisonPixelOffset, 'contact-info');
        setIsScrolled(false);
    };

    /**
     * handles moving content in the introduction section
     *
     * @param heightOffset
     * @param comparisonOffset
     */
    const moveContent = (
        heightOffset: number,
        comparisonOffset: number,
        sectionName: 'introduction' | 'education' | 'work-experience' | 'technologies' | 'awards' | 'contact-info'
    ): void => {
        const div = window.document.getElementById(`${sectionName}-div`);

        if (div) {
            const paddingTop = -1 * (div.getBoundingClientRect().top - locs['navbar-bottom']) + heightOffset;

            let paddingVector: number;
            switch (offsetDirection) {
                case ScrollDirections.UP:
                    paddingVector = paddingTop - currentPaddingVals[sectionName];
                    break;
                case ScrollDirections.DOWN:
                    paddingVector = paddingTop + (-1 * currentPaddingVals[sectionName]);
                    break;
                default:
                    return; // break out of the function
            };

            const newHeight = div.getBoundingClientRect().height + paddingVector;
            const componentHeight = locs[`${sectionName}-section-bottom`] - locs[`${sectionName}-section-top`] - comparisonOffset;

            if (newHeight < componentHeight) {
                switch (sectionName) {
                    case 'introduction':
                        setIntroductionStyle({paddingTop: `${paddingTop}px`});
                    case 'education':
                        setEducationStyle({paddingTop: `${paddingTop}px`});
                    case 'work-experience':
                        setWorkExperienceStyle({paddingTop: `${paddingTop}px`});
                    case 'technologies':
                        setTechnologiesStyle({paddingTop: `${paddingTop}px`});
                    case 'awards':
                        setAwardsStyle({paddingTop: `${paddingTop}px`});
                    case 'contact-info':
                        setContactInfoStyle({paddingTop: `${paddingTop}px`});
                };

                let newObj = currentPaddingVals;
                newObj[sectionName] = paddingTop;
                setCurrentPaddingVals(newObj);
            }
        }
    };

    /**
     * gets the appropriate pixel offsets based on screen size for rendering
     * the text shift
     *
     * @returns [heightOffset, comparisonOffset]
     */
    const getPixelOffsets = (): [number, number] => {
        const containerSize = getTailwindContainerWidth(window.innerWidth);

        switch (containerSize) {
            case c.SM_TAILWIND_CONTAINER:
                return [30, 85];
            case c.MD_TAILWIND_CONTAINER:
                return [25, 80];
            case c.LG_TAILWIND_CONTAINER:
                return [15, 65];
            case c.XL_TAILWIND_CONTAINER:
                return [10, 80];
            case c.TWO_XL_TAILWIND_CONTAINER:
                return [5, 80];
            default:
                throw new Error('Unexpected Container Size!');
        }
    };

    /**
     * initializes the starting locations of div's
     */
    const setSectionLocations = (): void => {
        const introductionSection = window.document.getElementById('introduction-section');
        const educationSection = window.document.getElementById('education-section');
        const workExperienceSection = window.document.getElementById('work-experience-section');
        const technologiesSection = window.document.getElementById('technologies-section');
        const awardsSection = window.document.getElementById('awards-section');
        const contactInfoSection = window.document.getElementById('contact-info-section');
        const navbar = window.document.getElementById('navbar');

        if (
            introductionSection &&
            educationSection &&
            workExperienceSection &&
            technologiesSection &&
            awardsSection &&
            contactInfoSection &&
            navbar
        ) {
            setLocs({
                'navbar-bottom': navbar.getBoundingClientRect().bottom,
                'introduction-section-bottom': introductionSection.getBoundingClientRect().height + introductionSection.getBoundingClientRect().top,
                'introduction-section-top': introductionSection.getBoundingClientRect().top,
                'education-section-bottom': educationSection.getBoundingClientRect().height + educationSection.getBoundingClientRect().top,
                'education-section-top': educationSection.getBoundingClientRect().top,
                'work-experience-section-bottom': workExperienceSection.getBoundingClientRect().height + workExperienceSection.getBoundingClientRect().top,
                'work-experience-section-top': workExperienceSection.getBoundingClientRect().top,
                'technologies-section-bottom': technologiesSection.getBoundingClientRect().height + technologiesSection.getBoundingClientRect().top,
                'technologies-section-top': technologiesSection.getBoundingClientRect().top,
                'awards-section-bottom': awardsSection.getBoundingClientRect().height + awardsSection.getBoundingClientRect().top,
                'awards-section-top': awardsSection.getBoundingClientRect().top,
                'contact-info-section-bottom': contactInfoSection.getBoundingClientRect().height + contactInfoSection.getBoundingClientRect().top,
                'contact-info-section-top': contactInfoSection.getBoundingClientRect().top
            });
        }
    };

    return (
        <div className='container mx-auto full-screen'>
            <nav
                className='flex mx-auto w-full fixed z-50'
                id='navbar'
            >
                <NavBar/>
            </nav>
            <div className='container mx-auto pt-5% pl-5% pr-5%'>
                <section
                    id='introduction-section'
                    className='container mx-auto pt-5% pl-5% pr-5% pb-5% text-center bg-gray-400 rounded-md h-screen mb-2.5%'
                >
                    {/* Introduction */}
                    <div id='introduction-div' style={introductionStyle}>
                        <h1 className='text-6xl font-semibold mb-2.5%'>
                            Introduction
                        </h1>
                        <div className='container mt-2.5% mb-2.5% border-b-4 w-96 mx-auto border-gray-700 rounded'/>
                        <div className='grid place-items-center'>
                            {prop_constants.Self_Display}
                        </div>
                    </div>
                </section>
                <section
                    id='education-section'
                    className='container mx-auto pt-5% pl-5% pr-5% pb-5% text-center bg-gray-700 rounded-md h-screen mb-2.5%'
                >
                    {/* Education */}
                    <div id='education-div' style={educationStyle}>
                        <h1 className='text-6xl font-semibold mb-2.5%'>
                            Education
                        </h1>
                        <div className='container mt-2.5% mb-2.5% border-b-4 w-[18rem] mx-auto border-gray-400 rounded'/>
                        <div className='grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16'>
                            {prop_constants.High_School_Display}
                            {prop_constants.College_Degree_Display}
                        </div>
                    </div>
                </section>
                <section
                    id='work-experience-section'
                    className='container mx-auto pt-5% pl-5% pr-5% pb-25% text-center bg-gray-400 rounded-md h-screen mb-2.5%'
                >
                    {/* Work Experience */}
                    <div id='work-experience-div' style={workExperienceStyle}>
                        <h1 className='text-6xl font-semibold mb-2.5%'>
                            Work Experience
                        </h1>
                        <div className='container mt-2.5% mb-2.5% border-b-4 w-[30rem] mx-auto border-gray-700 rounded'/>
                        <div className='grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16'>
                            {prop_constants.UASP_Display}
                            {prop_constants.Amazon_Display}
                        </div>
                    </div>
                </section>
                <section
                    id='technologies-section'
                    className='container mx-auto pt-5% pl-5% pr-5% pb-25% text-center bg-gray-700 rounded-md h-[150vh] mb-2.5%'
                >
                    {/* Technologies */}
                    <div id='technologies-div' style={technologiesStyle}>
                        <h1 className='text-6xl font-semibold mb-2.5%'>
                            Programming Experience
                        </h1>
                        <div className='container mt-2.5% mb-2.5% border-b-4 w-[20rem] xl:w-[44rem] 2xl:w-[44rem] mx-auto border-gray-400 rounded'/>
                        <div className='grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16'>
                            {prop_constants.Languages_Display}
                            {prop_constants.Frameworks_And_Tools_Display}
                        </div>
                        <div className='container h-[4rem]'></div>
                        <div className='grid place-items-center grid-cols-1 gap-16'>
                            {prop_constants.AWS_Technologies_Display}
                        </div>
                    </div>
                </section>
                <section
                    id='awards-section'
                    className='container mx-auto pt-5% pl-5% pr-5% pb-25% text-center bg-gray-400 rounded-md h-screen mb-2.5%'
                >
                    {/* Awards */}
                    <div id='awards-div' style={awardsStyle}>
                        <h1 className='text-6xl font-semibold mb-2.5%'>
                            Awards
                        </h1>
                        <div className='container mt-2.5% mb-2.5% border-b-4 w-[14rem] mx-auto border-gray-700 rounded'/>
                        <div className='grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16'>
                            {prop_constants.Best_AR_Hack_Display}
                            {prop_constants.Deans_List_Display}
                        </div>
                    </div>
                </section>
                <section
                    id='contact-info-section'
                    className='container mx-auto pt-5% pl-5% pr-5% pb-25% text-center bg-gray-700 rounded-md h-[30vh] mb-2.5%'
                >
                    {/* Contact Info */}
                    <div id='contact-info-div' style={contactInfoStyle}>
                        <h1 className='text-6xl font-semibold mb-2.5%'>
                            Contact Information
                        </h1>
                        <div className='container mt-2.5% mb-2.5% border-b-4 w-[35rem] mx-auto border-gray-400 rounded'/>
                        <h3 className='text-xl'>
                            Email: ryder.loves.basketball@gmail.com <br/>
                            <a
                                href='https://www.linkedin.com/in/ryder-roth-b414711b8/'
                                className='text-blue-600 hover:underline'
                            >
                                LinkedIn
                            </a>
                        </h3>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
