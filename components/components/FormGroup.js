import React from 'react'

export const FormGroup = ({
    className = "",
    horizontal = false,
    children = null,
    ...newProps
}) => {
    
    let finalClass = `${className} my-6`
    if (horizontal) {
        const inpuClass = 'grid grid-cols-1 gap-6 md:mb-0 md:gap-6';
        if (children.length == 2) finalClass += ` ${inpuClass} md:grid-cols-2`;
        if (children.length == 3) finalClass += ` ${inpuClass} md:grid-cols-3`;
        if (children.length == 4) finalClass += ` ${inpuClass} md:grid-cols-4`;
        if (children.length == 5) finalClass += ` ${inpuClass} md:grid-cols-5`;
        if (children.length == 6) finalClass += ` ${inpuClass} md:grid-cols-6`;
        if (children.length == 7) finalClass += ` ${inpuClass} md:grid-cols-7`;
        if (children.length == 8) finalClass += ` ${inpuClass} md:grid-cols-8`;
        if (children.length == 9) finalClass += ` ${inpuClass} md:grid-cols-9`;
        if (children.length == 10) finalClass += ` ${inpuClass} md:grid-cols-10`;
        if (children.length == 11) finalClass += ` ${inpuClass} md:grid-cols-11`;
        if (children.length == 12) finalClass += ` ${inpuClass} md:grid-cols-12`;
    }

    return (
        <div className={finalClass} {...newProps}>
            {children}
        </div>
    )
}
