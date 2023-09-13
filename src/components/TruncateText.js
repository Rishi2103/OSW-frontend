import React from 'react';

class TruncateText extends React.Component {
  render() {
    const { text, maxChars } = this.props;
    const truncatedText = text.slice(0, maxChars);
    return (
      <div>
        <p style={{fontSize: '17px', padding:'3px', fontWeight: '400'}}>{truncatedText}{text.length > maxChars && '...'}</p>
      </div>
    );
  }
}

export default TruncateText;
