import { CustomPageTitleProps } from "@/types";
import { Typography } from "@mui/material";

const CustomPageTitle: React.FC<CustomPageTitleProps> = ({ title }) => {
    return (
        <Typography sx={{
            fontFamily: 'ArkitBold',
            fontSize: '34px',
            fontWeight: '600'
        }} variant="h2">
            {title}
        </Typography>
    )
};

export default CustomPageTitle
