import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function paragraphText({ children, ...props }) {
  return <ParagraphTextStyles {...props}>{children}</ParagraphTextStyles>;
}

export default paragraphText;
