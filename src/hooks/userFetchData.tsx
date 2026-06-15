import { useEffect, useState } from 'react';
import type { Root } from '../types/DashboardTypes';

export default function useFetchData(): Root | undefined {

    const URL =
        'https://batteryvsgaming-dataset-default-rtdb.firebaseio.com/data.json';

    const [data, setData] = useState<Root>();

    useEffect(() => {

        fetch(URL)
            .then((response) => response.json())
            .then((data: Root) => setData(data))
            .catch((error) => console.error(error));

    }, []);

    return data;
}