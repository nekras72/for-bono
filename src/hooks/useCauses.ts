import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from "@/constants";
import { Cause, UseCausesType } from "@/types";

const useCauses = (): UseCausesType => {
    const [isFetching, setIsFetching] = useState(false);
    const [causes, setCauses] = useState<Cause[] | null>(null);
    const [error, setError] = useState<string>('');

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const getCauses = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            setIsFetching(true);
            try {
                const response = await fetch(`${BASE_URL}/charity/causes`, {
                    signal: abortControllerRef.current?.signal,
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data?.data?.length > 0) {
                        setCauses(data.data);
                    }
                }
            } catch (error: any) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                    return;
                }
                console.error("Error fetching causes:", error);
                setError('Something went wrong, try again later...');
            } finally {
                setIsFetching(false);
            }
        };

        getCauses();
    }, []);

    return { isFetching, causes, error };
};

export default useCauses;
