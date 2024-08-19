import usePickedCauses from '@/hooks/usePickedCauses';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const CausePickProgress = () => {
    const { pickedCauses } = usePickedCauses();
    const numberPicked = pickedCauses.length;
    const typographyValue = `${numberPicked} / 3 causes added`;
    const normalise = (value: number) => {
        if (value > 90) {
            return Math.round(value / 100) * 100;
        } return value;
    }
    return (
        <Box sx={{
            marginTop: 'auto',
            marginBottom: {
                xs: '16px',
                sm: '30px',
            },
            borderTop: '1px solid lightgray',
            width: '100%',
            maxWidth: '444px',
            padding: '24px'
        }}>
            <Typography
                sx={{
                    fontWeight: '700',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    textAlign: {
                        xs: 'left',
                        sm: 'center'
                    },
                    marginBottom: '8px'
                }}
            >
                {typographyValue}
            </Typography>
            <LinearProgress sx={{
                height: '9px',
                borderRadius: '30px',
                '&.MuiLinearProgress-determinate': {
                    backgroundColor: '#CCCCCC'
                }
            }} variant="determinate" value={normalise(numberPicked * 33)} />
        </Box>
    )
};

export default CausePickProgress;
