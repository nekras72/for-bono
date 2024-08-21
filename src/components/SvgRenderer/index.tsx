import { SvgRendererProps } from "@/types";
import { Box } from "@mui/material";

const SvgRenderer: React.FC<SvgRendererProps> = ({ isPicked, isInDescription }) => {

    const picked = <svg width="14" height="12" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2L5.97031 11.5063L1.42676 7.50586" fill="none"></path><path d="M14 2L5.97031 11.5063L1.42676 7.50586" stroke="#fff" strokeWidth="2.63" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
    const notPicked = <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.3333 26.9987C20.6971 26.9987 26.6667 21.0292 26.6667 13.6654C26.6667 6.30157 20.6971 0.332031 13.3333 0.332031C5.96954 0.332031 0 6.30157 0 13.6654C0 21.0292 5.96954 26.9987 13.3333 26.9987ZM14.667 12.3294H18.667C19.0206 12.3294 19.3598 12.4699 19.6098 12.72C19.8598 12.97 20.0003 13.3091 20.0003 13.6628C20.0003 14.0164 19.8598 14.3555 19.6098 14.6056C19.3598 14.8556 19.0206 14.9961 18.667 14.9961H14.667V18.9961C14.667 19.3497 14.5265 19.6889 14.2765 19.9389C14.0264 20.189 13.6873 20.3294 13.3337 20.3294C12.98 20.3294 12.6409 20.189 12.3909 19.9389C12.1408 19.6889 12.0003 19.3497 12.0003 18.9961V14.9961H8.00033C7.6467 14.9961 7.30757 14.8556 7.05752 14.6056C6.80747 14.3555 6.66699 14.0164 6.66699 13.6628C6.66699 13.3091 6.80747 12.97 7.05752 12.72C7.30757 12.4699 7.6467 12.3294 8.00033 12.3294H12.0003V8.32943C12.0003 7.9758 12.1408 7.63667 12.3909 7.38662C12.6409 7.13657 12.98 6.99609 13.3337 6.99609C13.6873 6.99609 14.0264 7.13657 14.2765 7.38662C14.5265 7.63667 14.667 7.9758 14.667 8.32943V12.3294Z" fill="white" fillOpacity="0.8"></path></svg>;
    const icon = isInDescription ? picked : isPicked ? picked : notPicked;

    return (
        <Box sx={{
            backgroundColor: isPicked ? '#333333' : '',
            borderRadius: '50%',
            width: isInDescription ? '20px' : '32px',
            height: isInDescription ? '20px' : '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {icon}
        </Box>
    )
};

export default SvgRenderer;
