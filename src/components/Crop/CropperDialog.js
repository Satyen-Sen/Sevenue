import React, { useState } from 'react';
import Cropper from 'react-cropper';
import DragAndDrop from './DragAndDrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function CropperDialog({
  okLabel = 'Edit',
  cancelLabel = 'Cancel',
  show,
  dismiss,
  cancel,
  onCropped,
  onSelected,
  src,
  isSquare,
  aspectRatio,
}) {
  const [cropper, setCropper] = useState();

  const cropImage = () => {
    if (typeof cropper.getCroppedCanvas() === 'undefined' || !cropper.getCroppedCanvas()) {
      return;
    }
    onCropped(cropper.getCroppedCanvas().toDataURL());
  };

  const handleDrop = (files) => {
    const reader = new FileReader();
    reader.onload = () => {
      onSelected(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={dismiss} open={show}>
      <DialogTitle>
        <Box display={'flex'}>
          <Typography variant="h6">{'Select Image'}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box width={'100%'}>
          {!src ? (
            <Box display={'flex'} justifyContent={'center'} width={'100%'}>
              <DragAndDrop handleDrop={handleDrop}>
                <Box borderRadius={5} height={250} width={380} />
              </DragAndDrop>
            </Box>
          ) : (
            <Cropper
              aspectRatio={isSquare ? 1 : aspectRatio ? aspectRatio : 12 / 16}
              guides={true}
              preview=".img-preview"
              ref={(c) => {
                setCropper(c);
              }}
              src={src}
              // eslint-disable-next-line no-inline-styles/no-inline-styles
              style={{ height: 'auto', width: '100%' }}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={cancel}>
          {cancelLabel}
        </Button>
        {src ? (
          <Button color="primary" onClick={() => cropImage()} variant="contained">
            {okLabel}
          </Button>
        ) : (
          <Button color="primary" disabled variant="contained">
            {okLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

CropperDialog.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  show: PropTypes.bool,
  dismiss: PropTypes.func,
  cancel: PropTypes.func,
  onCropped: PropTypes.func,
  onSelected: PropTypes.func,
  src: PropTypes.string,
  isSquare: PropTypes.bool,
  aspectRatio: PropTypes.number,
};

export default CropperDialog;
