import PropTypes from 'prop-types';

const getPageMessages = (pagePath, locale) => {
  if (!pagePath) {
    return {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
      },
    };
  }
  return {
    messages: {
      ...require(`../messages/shared/${locale}.json`),
      ...require(`../messages/${pagePath}/${locale}.json`),
    },
  };
};

getPageMessages.propTypes = {
  pagePath: PropTypes.string.isRequired,
  locale: PropTypes.string,
};

export default getPageMessages;
