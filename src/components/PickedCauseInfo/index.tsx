import { PickedCauseInfoType } from "@/types";
import { Typography, CardMedia, Box } from "@mui/material";

const PickedCauseInfo: React.FC<PickedCauseInfoType> = ({ cause }) => {

    return (
        cause ?
            <Box sx={{
                position: {
                    xs: 'static',
                    md: 'absolute',
                },
                left: {
                    md: '70%',
                    lg: '62%',
                    xl: '60%'
                },
                top: '175px',
                height: {
                    xs: 'auto',
                    md: '365px',
                },
                maxWidth: {
                    xs: '100%',
                    sm: '384px',
                    md: '402px',
                },
                borderLeft: {
                    xs: 'none',
                    md: '1px solid #CCCCCC',
                },
                padding: {
                    xs: '20px',
                    md: '20px 20px 20px 60px',
                },
                display: 'flex',
                gap: '10px',
                marginLeft: {
                    xs: 0,
                    md: '50px',
                },
                flexDirection: {
                    xs: 'row',
                    md: 'column',
                },
            }}>
                <Box>
                    <Typography variant="causeInfoHeader">{cause.title}</Typography>
                    <br />
                    <Typography variant="causeInfoText">{cause.description}</Typography>
                </Box>
                <CardMedia sx={{
                    borderRadius: '6px',
                    width: {
                        xs: '80px',
                        md: '115px',
                    },
                    height: {
                        xs: '80px',
                        md: '115px',
                    },
                }} component='img' alt={cause.impactHashtag} src={cause.icon} />
            </Box >
            : undefined
    )
};

export default PickedCauseInfo
