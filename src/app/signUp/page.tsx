'use client'
import GoogleLogo from "@/assets/svg/GoogleLogo";
import BackNavButton from "@/components/BackNavButton";
import CustomInput from "@/components/CustomInput";
import CustomMainButton from "@/components/CustomMainButton";
import CustomMainComponent from "@/components/CustomMainComponent";
import CustomPageTitle from "@/components/CustomPageTitle";
import { BASE_URL, continueWithGoogle, or, signInPageHeader, signInPageSubHeader, signInPageSubInputsText } from "@/constants";
import usePickedCauses from "@/hooks/usePickedCauses";
import { DataSendType } from "@/types";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";

const sendData = async (data: DataSendType) => {
    const strData = JSON.stringify(data);
    const response = await fetch(`${BASE_URL}/auth/register/anonymous`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: strData
    });
    if (response.ok) {
        alert('User data was sent');
    }
}

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { pickedCauses } = usePickedCauses();

    const isAbleToSendRequest = name !== '' && email !== '' && pickedCauses.length === 3;
    const handleClick = isAbleToSendRequest ? () => { sendData({ causes: pickedCauses, firstName: name, email }) } : undefined;

    return (
        <CustomMainComponent>
            <BackNavButton />
            <CustomPageTitle title={signInPageHeader} />
            <CustomPageTitle subTitle={signInPageSubHeader} />
            <Box sx={{
                width: '100%',
                maxWidth: '346px',
                marginTop: '20px',
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px'
            }}>
                <CustomInput
                    value={name}
                    onChangeHandler={(e) => setName(e.target.value)}
                    placeholder="Your name"
                />
                <CustomInput value={email} onChangeHandler={(e) => setEmail(e.target.value)} placeholder="Your email" />
            </Box>
            <Typography>{signInPageSubInputsText}</Typography>
            <Divider sx={{ my: '30px', width: '346px' }}>{or}</Divider>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '24px',
                border: '1px solid black',
                width: '346px',
                height: '48px',
                marginBottom: '50px'
            }}>
                <GoogleLogo />
                <Typography>
                    {continueWithGoogle}
                </Typography>
            </Box>
            <CustomMainButton sx={{ width: '240px', height: '48px' }} href="/causeSelection" text="Save & continue" iconPosition="end" handleClick={handleClick} />
        </CustomMainComponent>
    )
};

export default SignUpPage;
