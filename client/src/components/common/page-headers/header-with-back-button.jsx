import { Box, Typography, styled } from "@mui/material";
import PageBackButton from "../buttons/page-back.button";

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Title = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubTitle = styled(Typography)`
  padding: 0 4px;
`;

const HeaderWithBackButton = ({
  title,
  subtitle = "",
  onClose,
  padding = "0",
}) => {
  return (
    <Component sx={{ padding: padding }}>
      <Title>
        <Typography variant="h2">{title}</Typography>
        <Box sx={{ background: "yellow", color: "black" }}>
          <SubTitle variant="h2">{subtitle}</SubTitle>
        </Box>
      </Title>

      <PageBackButton onClick={onClose} />
    </Component>
  );
};

export default HeaderWithBackButton;
