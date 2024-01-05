import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import SplitDayMeta from '../components/SplitDayMeta';

const Split = () => {
    const { id } = useParams();
    const [splitDays, setSplitDays] = useState(null);

    useEffect(() => {
        const fetchSplitDays = async (id) => {
            const response = await fetch(`/api/workouts/${id}`);
            const json = await response.json();

            if (response.ok) {
                setSplitDays(json);
            }
        }

        fetchSplitDays();
    }, []);

    const split = splitDays[0].spli

    return (
        <div className="split-days">
            <h2>Split ${id}</h2>
            <h2>{split.title}</h2>
            <div className="splitDays">
                {splitDays && splitDays.map((splitDay) => (
                    <SplitDayMeta key={splitDay.id} splitDay = { splitDay } />
                ))}
            </div>

        </div>
    );
};

export default Split;