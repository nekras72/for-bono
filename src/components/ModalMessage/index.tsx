import { DialogMessageProps } from "@/types";
import { Modal, Box, Typography } from "@mui/material";
import CustomMainButton from "../CustomMainButton";
import { pickMessageCloseBtnText } from "@/constants";

const ModalMessage: React.FC<DialogMessageProps> = ({ message, handleClose }) => {
    return (
        <Modal
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={true}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    maxWidth: '350px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '40px 32px 36px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                <Typography
                    sx={{
                        color: '#333333',
                        marginBottom: '16px'
                    }}>
                    {message}
                </Typography>
                <CustomMainButton text={pickMessageCloseBtnText} handleClick={handleClose} href="" />
            </Box>
        </Modal >
    )
};

export default ModalMessage;
