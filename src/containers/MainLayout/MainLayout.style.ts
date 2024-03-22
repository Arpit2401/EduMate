import { Container, styled } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => {
  const {
    palette: { grey },
    typography: { pxToRem },
  } = theme;

  return {
    minHeight: `calc(100vh - ${pxToRem(70)})`,
    height: '100%',
    background: grey[50],

    '&.MuiContainer-root': {
      maxWidth: 'initial',
    },
  };
});
