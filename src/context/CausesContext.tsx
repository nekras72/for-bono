'use client'
import { CausesContextType, ContextChildren } from "@/types";
import { createContext, useState } from "react";

const CausesContext = createContext<CausesContextType | null>(null);

const CausesContextProvider: React.FC<ContextChildren> = ({ children }) => {
    const [pickedCauses, setPickedCauses] = useState<number[]>([]);

    const addCause = (id: number) => {
        setPickedCauses(prev => [...prev, id])
    };
    const removeCause = (id: number) => {
        setPickedCauses(prev => prev.filter(item => item !== id))
    };

    return <CausesContext.Provider value={{ pickedCauses, addCause, removeCause }}>
        {children}
    </CausesContext.Provider>
};

export { CausesContext, CausesContextProvider };