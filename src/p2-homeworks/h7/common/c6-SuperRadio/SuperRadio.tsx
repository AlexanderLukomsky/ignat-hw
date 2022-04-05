import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <label className='radio' key={name + '-' + i}>
            <input
                className='radio__input'
                type={'radio'}
                value={o}
                onChange={onChangeCallback}
                checked={o == value}
                name={name}
            />
            <span className='radio__text'>
                {o}
            </span>
        </label>
    )) : []
    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
