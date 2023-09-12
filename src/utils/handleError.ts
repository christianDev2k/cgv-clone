import { AxiosError, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

export const handleError = (error?: AxiosError, message?: string) => {
    if (isAxiosError<{ content: string }>(error)) {
        toast.error(message || error.response.data.content, {
            closeButton: false,
            autoClose: 2000,
            hideProgressBar: true,
        });
    }
};

export default handleError;
