/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames/bind';
import { UseFormRegister } from 'react-hook-form';
// ~
import styles from './input.module.scss';

const cx = classNames.bind(styles);

type InputProps = {
    label?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    error?: string;
    id?: string;
    register?: UseFormRegister<any>;
};

const Input = ({ label, type = 'text', id, placeholder, register, error }: InputProps) => {
    return (
        <div>
            {!!label && (
                <label htmlFor={id} className="block font-semibold text-slate-600">
                    {label}
                </label>
            )}
            <input type={type} id={id} className={cx('form-control')} placeholder={placeholder} {...register?.(id)} />
            {!!error && <p className="my-1 text-red-500 text-[13px]">{error}</p>}
        </div>
    );
};

export default Input;
