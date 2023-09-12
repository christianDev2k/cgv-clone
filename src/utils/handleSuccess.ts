import { toast } from 'react-toastify';

export const handleToastAuthen = (message: string) => {
    toast.success(message, {
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
    });
};

export default handleToastAuthen;
