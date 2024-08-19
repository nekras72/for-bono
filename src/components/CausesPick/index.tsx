import { CausesPickProps } from "@/types";
import { Box, Typography } from "@mui/material";
import SvgRenderer from "../SvgRenderer";
import usePickedCauses from "@/hooks/usePickedCauses";

const CausesPick: React.FC<CausesPickProps> = ({ causes, handleOverPick }) => {
    const { pickedCauses, addCause, removeCause } = usePickedCauses();

    const isPickedCause = (id: number) => {
        return pickedCauses.includes(id);
    }
    const handleClick = (id: number) => {
        if (isPickedCause(id)) {
            removeCause(id);
        } else if (pickedCauses.length < 3) {
            addCause(id);
        } else handleOverPick();
    };

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
                xs: 'repeat(5, 120px)', // 5 items in the first row at xs breakpoint
                sm: 'repeat(3, 120px)', // 3 items per row at sm and above breakpoints
            },
            gridTemplateRows: {
                xs: 'repeat(2, 120px)', // 2 rows at xs breakpoint
                sm: 'repeat(3, 120px)', // 3 rows at sm and above breakpoints
            },
            gap: '8px',
            justifyContent: {
                xs: 'start',
                sm: 'center'
            },
            maxWidth: '100%',
            overflowX: {
                xs: 'scroll', // Horizontal scrolling at xs breakpoint
                sm: 'auto',   // No scrolling at other breakpoints
            },
            padding: '4px', // Add padding to ensure the shadow isn't cut off
        }}>
            {causes.map((item) => (
                <Box
                    onClick={() => handleClick(item.id)}
                    key={`id-${item.id}`}
                    sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '120px',
                        height: '120px',
                        backgroundColor: item.impactBackground,
                        borderRadius: '10px',
                        padding: '10px',
                        boxShadow: '-4px 4px 0px #1C1C1C',
                    }}>
                    <Typography sx={{
                        color: '#ffffffcc',
                        fontWeight: '700',
                        lineHeight: '18px',
                        fontSize: '16px',
                    }}>
                        {item.title}
                    </Typography>
                    <Box>
                        <SvgRenderer isPicked={isPickedCause(item.id)} />
                    </Box>
                </Box>
            ))}
        </Box>
    )
};

export default CausesPick;
