import { Box, TextField, styled, FormHelperText } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
  minWidth: "30px",
  width: "100%",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "green",
    color: "white"
  },
  "& .MuiInputLabel-root": {
    color: "grey",
    "&.Mui-focused": {
      color: "black"
    }
  },
  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.75)",
    backgroundColor: "transparent",
    padding: "0 5px"
  }
}));

const TextFieldStyled = ({
  register,
  label,
  name,
  value,
  rows = "1",
  multiline = false,
  errors = null,
  InputProps = {},
  inputProps = {},
  type = "text",
  disabled = false,
  isHelperText = false,
  subtitle = "",
  required = false
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledTextField
        {...register(name)}
        variant="outlined"
        type={type}
        id={name}
        value={value}
        label={label}
        rows={rows}
        InputProps={InputProps}
        inputProps={inputProps}
        multiline={multiline}
        error={!!errors}
        subtitle={errors?.message}
        disabled={disabled}
        required={required}
      />
      {isHelperText ? <FormHelperText>{subtitle}</FormHelperText> : null}
      <FormHelperText sx={{ color: "red", paddingLeft: "10px" }}>
        {errors?.message}
      </FormHelperText>
    </Box>
  );
};

export default TextFieldStyled;
