import { CustomPageTitleProps } from "@/types";
import { Typography } from "@mui/material";

const CustomPageTitle: React.FC<CustomPageTitleProps> = ({ title, subTitle }) => {
    return (
        <Typography variant={title ? "mainHeader" : "mainSubHeader"}>
            {title ?? subTitle}
        </Typography>
    )
};

export default CustomPageTitle
