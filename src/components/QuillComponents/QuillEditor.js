import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Quill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <div>{'Loading...'}</div>,
});

class QuillEditor extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    onChange: PropTypes.func,
    toolbar: PropTypes.array,
    value: PropTypes.string,
  };

  static defaultProps = {
    toolbar: [
      { size: ['small', false] },
      {},
      // { header: [1, 2, 3, 4, 5, 6, false] },
      // { 'header': 1 }, { 'header': 2 },
      'bold',
      'italic',
      'underline',
      'strike',
      // 'blockquote',
      {},
      { align: [] },
      { list: 'ordered' },
      { list: 'bullet' },
      {},
      'code',
      'link',
      { script: 'sub' },
      { script: 'super' },
      { color: [] },
      { background: [] },

      // 'image',
      // 'video',
      // { 'font': [] },
      // 'clean',
      // { 'direction': 'rtl' },
      // { 'indent': '-1'},
      // { 'indent': '+1' },
      'formula',
    ],
  };

  state = { text: '', quillLoaded: false };

  handleChange = (value) => {
    //  this.setState({ text: value });
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value } = this.props;
    const { toolbar } = this.props;

    return (
      <div className={'ql-container-editor'}>
        {Boolean(Quill) /*quillLoaded &&*/ && (
          <Quill
            modules={{
              toolbar,
            }}
            // debug={'info'}
            onChange={this.handleChange}
            // readOnly={true}
            // theme='bubble'
            theme="snow"
            value={value}
          />
        )}
      </div>
    );
  }
}
export default QuillEditor;
