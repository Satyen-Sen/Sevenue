import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class DragAndDrop extends Component {
  state = {
    drag: false,
  };
  dropRef = React.createRef();
  fileRef = React.createRef();
  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: true });
  };
  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
  };
  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files && files.length > 0) {
      // eslint-disable-next-line react/prop-types
      this.props.handleDrop(files);
      e.dataTransfer.clearData();
    }
  };
  onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      // eslint-disable-next-line react/prop-types
      this.props.handleDrop(files);
    };
    reader.readAsDataURL(files[0]);
  };
  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }
  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }
  render() {
    return (
      <Box
        display="inline-block"
        onClick={() => this.fileRef.current.click()}
        position={'relative'}
        ref={this.dropRef}
        sx={{ cursor: 'pointer' }}
      >
        <Box
          sx={{
            border: this.state.drag ? 'dashed black 4px' : 'dashed grey 2px',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '39%',
              right: 0,
              left: 0,
              color: this.state.drag ? 'black' : 'grey',
            }}
          >
            <input
              accept="image/png, image/jpeg"
              onChange={this.onChange}
              ref={this.fileRef}
              // eslint-disable-next-line no-inline-styles/no-inline-styles
              style={{ display: 'none' }}
              type="file"
            />
            <Typography color={'primary'} component={Box} pl={2} pr={2} textAlign={'center'}>
              {'Click here to add a image or drag a image'}
            </Typography>
          </Box>
        </Box>
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </Box>
    );
  }
}
export default DragAndDrop;
