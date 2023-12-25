import {FC} from 'react';

interface IInputSelect{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (e:string) => any
    options: string[]
    id: string
    placeholder: string
    value:string
}

const InputSelect:FC<IInputSelect> = ({id, options, onChange, placeholder, value}) => {
    return (
        <>
            <input list={id} placeholder={placeholder} value={value}  onChange={(e) => onChange(e.target.value)}/>
            <datalist id={id}>
                {options?.map((option) =>
                    <option key={option} value={option} />
                )}
            </datalist>
        </>
    )
}
export default InputSelect