import { Box, styled } from "@mui/material";
import LayoutTitle from "./header-layout";
import CloseButtonIconButton from "../buttons/icons buttons/close.button-icon";
import { useTheme } from "@emotion/react";
import { tokens } from "@theme/theme";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderWithCloseButton = ({
  title = "",
  onClose,
  background = "",
  color = "white",
  margin = "0 0 20px 0"
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Component sx={{ margin: margin }}>
      <LayoutTitle
        title={title}
        background={background ? background : colors.header["gold"]}
        color={color}
        margin="0px"
      />
      <CloseButtonIconButton onClose={onClose} />
    </Component>
  );
};

export default HeaderWithCloseButton;
