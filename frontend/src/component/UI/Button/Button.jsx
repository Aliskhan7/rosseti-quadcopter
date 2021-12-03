import React from 'react';

function Button({children, addComparis}) {
    return (
        <button className='btn' onClick={addComparis}>
            {children}
        </button>
    );
}

export default Button;