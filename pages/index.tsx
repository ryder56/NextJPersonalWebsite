import type { NextPage } from 'next';
import NavBar from '../components/navbar';

const Home: NextPage = () => {
    return (
        <div className="container mx-auto bg-blue-500 full-screen">
            <NavBar/>
        </div>
    );
};

export default Home;
