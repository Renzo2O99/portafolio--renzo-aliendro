// components/StyledText.tsx
import React from 'react';

interface StyledTextProps {
    text: string;
    className: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text, className }) => {
    return (
        <span className={className}>
            {text}
        </span>
    );
};

export default StyledText;
