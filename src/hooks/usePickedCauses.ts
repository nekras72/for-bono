import { CausesContext } from "@/context/CausesContext";
import { useContext } from "react";

const usePickedCauses = () => {
    const context = useContext(CausesContext);

    if (!context) {
        throw new Error("usePickedCauses must be used within a CausesContextProvider");
    }

    return context;
};

export default usePickedCauses;