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
            {/* <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2.5">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
          </div> */}
        </div>
    )
}
