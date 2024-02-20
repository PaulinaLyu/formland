import { ChangeEventHandler } from 'react';
import {classNames} from '@/shared/libs';
import style from './InputWithLabel.module.css'
import { Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';


interface InputWithLabelProps { 
    containerClassName?: string;
    className?: string;
    placeholder?: string;
    label?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    size?: SizeType

}

export const InputWithLabel = (props:InputWithLabelProps) => {
   const  {className = '', placeholder= '', label = null, size='middle', containerClassName = '', value, onChange } = props;

    return (
        <div className={classNames('',{},[containerClassName])}>
            {label && <label className={style.Label}>{label}</label>}
            <Input className={classNames('',{},[className])} size={size} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
