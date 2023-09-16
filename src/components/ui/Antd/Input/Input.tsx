/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames/bind';
import cn from 'classnames';
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
    disabled?: boolean;
    hidden?: boolean;
};

const Input = ({
    label,
    type = 'text',
    id,
    placeholder,
    register,
    error,
    disabled = false,
    hidden = false,
}: InputProps) => {
    return (
        <div
            className={cn({
                hidden: hidden,
            })}
        >
            {!!label && (
                <label htmlFor={id} className="block font-semibold text-slate-600">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={cx('form-control')}
                placeholder={placeholder}
                {...register?.(id)}
                disabled={disabled}
                spellCheck={false}
            />
            {!!error && <p className="my-1 text-red-500 text-[13px]">{error}</p>}
        </div>
    );
};

export default Input;
