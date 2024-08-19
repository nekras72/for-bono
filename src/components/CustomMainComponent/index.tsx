import { CustomMainComponentProps } from "@/types";
import { Box } from "@mui/material";

const CustomMainComponent: React.FC<CustomMainComponentProps> = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: {
                xs: '20px',
                sm: '40px 30px 32px',
            },
            minHeight: 'calc(100vh - 60px)',
            backgroundColor: 'white',
            color: 'black',
        }}>
            {children}
        </Box>
    )
};

export default CustomMainComponent;
