'use client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BackNavButton = () => {
    const pathname = usePathname();

    const getBackPath = (path: string): string => {

        if (path === '/signUp') return '/causeSelection';
        return '/';
    }

    return (
        <Box sx={{
            width: {
                xs: '100%',
                sm: 'auto'
            },
            position: {
                xs: 'static',
                sm: 'absolute',
            },
            marginRight: 'auto',
            marginBottom: '20px',
            left: '40px',
            top: '90px',
        }}>
            <Link href={getBackPath(pathname)}>
                <Button sx={{
                    minWidth: '48px',
                    minHeight: '48px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    color: 'white',
                    border: '1px solid black',
                    boxSizing: 'border-box',
                    ":hover": {
                        backgroundColor: 'white',
                        color: 'black'
                    }
                }}>
                    <ArrowForwardIcon sx={{ rotate: '180deg' }} />
                </Button>
            </Link>
        </Box>
    )
};

export default BackNavButton;
