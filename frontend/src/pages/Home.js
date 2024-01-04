import { useEffect, useState } from 'react';
import SplitMeta from '../components/SplitMeta';

const Home = () => {
    const [splits, setSplits] = useState(null);

    useEffect(() => {
        const fetchSplits = async () => {
            const response = await fetch('/api/splits');
            const json = await response.json();

            if (response.ok) {
                setSplits(json);
            }
        }

        fetchSplits();
    }, []);

    return (
        <div className="home">
            <div className="splits">
                {splits && splits.map((split) => (
                    <SplitMeta key={split.id} split = { split } />
                ))}
            </div>
        </div>
    )
};

export default Home;