import { ButtonHTMLAttributes } from 'react';
import {classNames} from '@/shared/libs';

const BUTTON_VARIANTS = {
    primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
    className?: string;
    variant?: keyof typeof BUTTON_VARIANTS
}


export const Button = (props: ButtonProps) => {

    const {className = '', children, variant = 'primary', ...otherProps} = props;

    return (
        <button className={classNames("rounded-md px-3.5 py-2.5 text-sm font-semibold",{},[className, BUTTON_VARIANTS[variant] ])} {...otherProps}>
            {children}
        </button>
    )
}
