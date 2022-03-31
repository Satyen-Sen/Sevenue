import PropTypes from 'prop-types';

const getPageMessages = (pagePath, locale) => {
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
