import { ChangeEventHandler } from 'react';
import {classNames} from '@/shared/libs';
import style from './InputWithLabel.module.css'
import { Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';


interface InputWithLabelProps { 
    containerClassName?: string;
    id: string;
    className?: string;
    placeholder?: string;
    label?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    size?: SizeType

}

export const InputWithLabel = (props:InputWithLabelProps) => {
   const  {id, className = '', placeholder= '', label = null, size='middle', containerClassName = '', value, onChange } = props;

    return (
        <div className={classNames('',{},[containerClassName])}>
            {label && <label htmlFor={id} className={style.Label}>{label}</label>}
            <Input id={id} className={classNames('',{},[className])} size={size} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
