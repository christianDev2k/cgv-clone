import { AxiosError, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

const handleError = (message?: string, error?: AxiosError) => {
    if (isAxiosError<{ content: string }>(error)) {
        toast.error(message || error.response?.data.content);
    }
};

export default handleError;
