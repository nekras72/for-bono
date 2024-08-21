'use client'
import BackNavButton from "@/components/BackNavButton";
import CausesPick from "@/components/CausesPick";
import CustomMainComponent from "@/components/CustomMainComponent";
import CustomPageTitle from "@/components/CustomPageTitle";
import {
    causeSelectionPageHeader,
    causeSelectionPageMainBtnText,
    causeSelectionPageSubHeader,
    overPickMessage,
    underPickMessage
} from "@/constants";
import { Typography } from "@mui/material";
import { useState } from "react";
import CausePickProgress from "@/components/CausePickProgress";
import CustomMainButton from "@/components/CustomMainButton";
import ModalMessage from "@/components/ModalMessage";
import usePickedCauses from "@/hooks/usePickedCauses";
import useCauses from "@/hooks/useCauses";

export default function CauseSelectionPage() {
    const { pickedCauses } = usePickedCauses();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { causes, isFetching, error } = useCauses();

    const handleCloseDialog = () => setErrorMessage('');
    const handleOverPick = () => setErrorMessage(overPickMessage);
    const handleUnderPick = () => setErrorMessage(underPickMessage);
    const isEnoughCausesPicked = pickedCauses.length === 3;

    return (
        <CustomMainComponent>
            {errorMessage && <ModalMessage message={errorMessage} handleClose={handleCloseDialog} />}
            {isFetching && !causes && <Typography>Loading...</Typography>}
            {!isFetching && error && <Typography>{error}</Typography>}
            {causes && <>
                <BackNavButton />
                <CustomPageTitle title={causeSelectionPageHeader} />
                <CustomPageTitle subTitle={causeSelectionPageSubHeader} />
                <CausesPick handleOverPick={handleOverPick} causes={causes} />
                <CausePickProgress />
                <CustomMainButton
                    href="/signUp"
                    text={causeSelectionPageMainBtnText}
                    iconPosition="end"
                    handleClick={isEnoughCausesPicked ? undefined : handleUnderPick} />
            </>}
        </CustomMainComponent>
    )
}
