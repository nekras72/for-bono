import { CustomInputProps } from "@/types";
import { Input } from "@mui/material";

const CustomInput: React.FC<CustomInputProps> = ({ value, onChangeHandler, placeholder }) => {
    return (
        <Input
            sx={{
                height: 48,
                border: '2px solid #000000',
                borderRadius: '8px',
                px: '8px',
            }}
            disableUnderline
            value={value}
            size="medium"
            onChange={onChangeHandler}
            placeholder={placeholder}
        />
    )
};

export default CustomInput
