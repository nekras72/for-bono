'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { CustomBtnProps } from '@/types';
import styled from '@emotion/styled';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomButton = styled(Button)({
    maxWidth: '380px',
    minWidth: '240px',
    height: '48px',
    backgroundColor: '#1C1C1C',
    color: '#fff',
    borderRadius: '24px',
    padding: '10px 20px',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    border: '1px solid white',
    boxShadow: '-4px 4px 0px #1C1C1C',
    '&:hover': {
        backgroundColor: '#333333',
    },
    '&:active': {
        transform: 'translateY(4px)',
        boxShadow: 'none',
    },
    '& .MuiButton-endIcon': {
        marginLeft: '8px',
    },
});

const CustomLink = styled(Link)({
    width: 'auto',
    display: 'flex',
    justifyContent: 'center'
});


const CustomMainButton: React.FC<CustomBtnProps> = ({ text, iconPosition, href, handleClick, sx }) => {
    const startIcon = iconPosition === 'start' ? <ArrowForwardIcon /> : undefined;
    const endIcon = iconPosition === 'end' ? <ArrowForwardIcon /> : undefined;

    if (handleClick) {
        return (
            <CustomButton onClick={handleClick} startIcon={startIcon} endIcon={endIcon}>
                {text && text}
            </CustomButton >
        );
    }
    return (
        <CustomLink href={href}>
            <CustomButton sx={sx ?? { width: '100%' }} startIcon={startIcon} endIcon={endIcon}>
                {text && text}
            </CustomButton >
        </CustomLink>
    );
}
export default CustomMainButton;