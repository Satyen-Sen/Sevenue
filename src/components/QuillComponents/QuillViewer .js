import React from 'react';
import PropTypes from 'prop-types';

// const styles = {
//   flatContainer: {
//     // border: 'none !important',
//     // fontSize: '15px !important',
//     // padding: '2 !important',
//     // wordBreak: 'break-all',
//   },
//   flatEditor: {
//     // padding: '0 !important',
//   },
// };

const QuillViewer = ({ html }) => {
  return (
    // <div className={'ql-container ql-snow' + (flat ? ' ' + classes.flatContainer : '')}>
    <div className={'ql-snow'}>
      <div
        // className={'ql-editor' + (className ? ' ' + className : '') + (flat ? ' ' + classes.flatEditor : '')}
        className={'ql-viewer min-height-0'}
        //eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};

QuillViewer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  flat: PropTypes.bool,
  html: PropTypes.string.isRequired,
  sanitize: PropTypes.bool,
};

QuillViewer.defaultProps = {
  html: '',
  className: '',
  flat: true,
};

// export default withStyles(styles)(QuillViewer);
export default QuillViewer;
