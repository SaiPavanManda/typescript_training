import React, { ReactElement } from 'react';


interface HeaderPropsI {
    title: string;
    description: string;
}

const Header =  ({title} : Partial<HeaderPropsI>):ReactElement => {
    return (
        <div>
            {title}
        </div>
    )
}

export default Header
