import { toast } from 'react-toastify';

export const notificacionToastify = (message, type) => {
    if (type === 'success') {
        toast.success(message);
    } else if (type === 'error') {
        toast.error(message);
    }
};

