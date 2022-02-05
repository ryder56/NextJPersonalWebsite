import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const fetchDomain = `${window.location.host}/api/fun-fact`;

const FunFact: NextPage = () => {
    const [funFactText, setFunFactText] = useState('I am fetching you a fun fact...');

    useEffect(() => {
        fetchFunFact();
    }, []);

    const fetchFunFact = async () => {
        await fetch(fetchDomain, {
            method: 'get'
        }).then( async (response) => {
            console.log(response);
            const res = await response.json() as {[key: string]: string};
            setFunFactText(res['fact']);
        }, (rejection) => {
            setFunFactText('I was unable to fetch a fun fact :(');
        });
    };

    return(
        <div className='container mx-auto full-screen'>
            <nav
                className='flex mx-auto w-full fixed z-50'
                id='navbar'
            >
                <NavBar/>
            </nav>
            <div className='container mx-auto pt-[7.5%] pl-5% pr-5% pb-5% text-center mb-2.5%'>
                <h1 className='text-6xl font-semibold'>
                    HERES A FUN FACT!
                </h1>
                <div className='container mt-[1%] mb-2.5% border-b-4 w-[34rem] mx-auto border-gray-700 rounded'/>
                <h3 className='text-xl'>
                    {funFactText}
                </h3>
            </div>
        </div>
    );
};

export default FunFact;