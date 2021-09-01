import React from 'react';

const Button = ({
    children,
    style,
    className,
    onClick,
    type
}) => {
    return ( 
        <>
        <button style={style} className={className} onClick={onClick} type={type}    >{children}</button>
        </>

     );
}
 
export default Button;