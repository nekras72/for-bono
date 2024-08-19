'use client'
import BackNavButton from "@/components/BackNavButton";
import CausesPick from "@/components/CausesPick";
import CustomMainComponent from "@/components/CustomMainComponent";
import CustomPageTitle from "@/components/CustomPageTitle";
import {
    BASE_URL,
    causeSelectionPageHeader,
    causeSelectionPageMainBtnText,
    causeSelectionPageSubHeader,
    overPickMessage,
    underPickMessage
} from "@/constants";
import { Cause } from "@/types";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CausePickProgress from "@/components/CausePickProgress";
import CustomMainButton from "@/components/CustomMainButton";
import ModalMessage from "@/components/ModalMessage";
import usePickedCauses from "@/hooks/usePickedCauses";

export default function CauseSelectionPage() {
    const { pickedCauses } = usePickedCauses();
    const [isFetching, setIsFetching] = useState(true);
    const [causes, setCauses] = useState<Cause[] | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleCloseDialog = () => setErrorMessage('');
    const handleOverPick = () => setErrorMessage(overPickMessage);
    const handleUnderPick = () => setErrorMessage(underPickMessage);
    const isEnoughCausesPicked = pickedCauses.length === 3;


    useEffect(() => {
        const getCauses = async () => {
            const response = await fetch(`${BASE_URL}/charity/causes`);
            if (response.ok) {
                const data = await response.json();
                if (data?.data?.length > 0) {
                    setCauses(data.data)
                }
            }
            setIsFetching(false);
        }
        getCauses();
    }, []);


    if (isFetching) {
        return <Typography>Loading...</Typography>
    }

    if (!isFetching && !causes) {
        return <Typography>Something went wrong, try again later...</Typography>
    }

    return (
        <CustomMainComponent>
            {errorMessage && <ModalMessage message={errorMessage} handleClose={handleCloseDialog} />}
            <BackNavButton />
            <CustomPageTitle title={causeSelectionPageHeader} />
            <Typography>{causeSelectionPageSubHeader}</Typography>
            {causes && <CausesPick handleOverPick={handleOverPick} causes={causes} />}
            <CausePickProgress />
            <CustomMainButton href="/signUp" text={causeSelectionPageMainBtnText} iconPosition="end" handleClick={isEnoughCausesPicked ? undefined : handleUnderPick} />
        </CustomMainComponent>
    )
}
