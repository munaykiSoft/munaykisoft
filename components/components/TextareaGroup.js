import React from 'react'

export const TextareaGroup = ({
    className = '',
    label = '',
    color = 'text-gray-600',
    bold = false,
    name = '',
    placeholder = '',
    error = false,
    errorText = '',
    defaultValue = '',
    description = '',
    resize = false,
    onChange = () => { },
    ...newProps
}) => {

    const hasError = error || errorText
    let finalClass = `${className} w-full border border-gray-300 rounded-sm px-4 py-3 h-32 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 ${hasError && `border-red-600`
        }`
    if (!resize) finalClass += 'resize-none'

    return (
        <div>
            {label && (
                <label
                    className={`text-sm ${ bold ? 'font-bold': ''} ${color} ${hasError && "text-red-600"}`}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <textarea
                name={name}
                className={finalClass}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={e => onChange(e.currentTarget.value)}
                {...newProps}
            ></textarea>
            {description && (
                <span className="mt-2 text-gray-600 text-xs">{description}</span>
            )}
            {errorText && (
                <div className="bg-red-200 mt-2 py-2 px-4 text-xs text-red-600 rounded-sm">
                    {errorText}
                </div>
            )}
        </div>
    )
}
