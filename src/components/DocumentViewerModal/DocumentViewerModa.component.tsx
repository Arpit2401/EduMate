import * as React from 'react';
import { IconButton, Dialog, DialogContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DocumentViewerModal = ({
  isOpen,
  handleClose,
  documentTitle,
}: {
  isOpen: boolean;
  handleClose: () => void;
  documentTitle: string;
}) => {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <Typography variant="h3" padding="8px" textAlign="center">
          {documentTitle}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="img"
            src="https://thearyansacademy.in/images/Arrow.png"
            alt=""
            height="100%"
            width="100%"
            minHeight="25rem"
            minWidth="20rem"
          />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default DocumentViewerModal;
