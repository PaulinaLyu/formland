import { ChangeEventHandler } from 'react';
import {classNames} from '@/shared/libs';


interface InputProps { 
    containerClassName?: string;
    id: string;
    className?: string;
    placeholder?: string;
    label?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input= (props:InputProps) => {
   const  {id, className = '', placeholder= '', label = null, containerClassName = '', value, onChange } = props;

    return (
        <div className={classNames('',{},[containerClassName])}>
                {label && <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor={id}>{label}</label>}
                <input                  
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
        </div>
    )
}
