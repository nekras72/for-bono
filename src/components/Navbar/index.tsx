import { Box, Button } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
    const isUserLoggedIn = false;
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#333333',
            justifyContent: 'space-between',
            padding: '20px 30px',
            height: '60px'
        }}>
            <Link href='/'>
                <Image width={60} height={40} src="https://app.bono.so/images/main_bono_logo.png" alt="bono logo" />
            </Link>
            {!isUserLoggedIn && <Button sx={{
                textTransform: 'none',
                bgcolor: 'white',
                color: '#333333',
                border: '1px solid #333333',
                ":hover": {
                    bgcolor: 'lightgray'
                }
            }} size='small' variant="contained">Login</Button>}
        </Box>
    )
};

export default Navbar
