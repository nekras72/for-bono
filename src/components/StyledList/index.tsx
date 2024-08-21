import { homePageDotsTexts } from "@/constants";
import { Box, List, ListItem, Typography } from "@mui/material";

const getDottedList = () => {
    return homePageDotsTexts.map((item, idx) => {
        return <ListItem key={`${item.replace(' ', '')}-${idx}`} sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box sx={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                backgroundColor: '#5b86f3',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px'
            }}>
                <Typography sx={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 800,
                    lineHeight: '40px',
                    letterSpacing: '0.32px'
                }}>{idx + 1}</Typography>
            </Box>
            <Typography variant="mainContent">{item}</Typography>
        </ListItem>
    })
};

const StyledList = () => {

    return (
        <List>
            {getDottedList()}
        </List >
    )
};

export default StyledList
