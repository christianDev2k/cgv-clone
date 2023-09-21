import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'components';
import { ResultStatusType } from 'antd/es/result';
import cn from 'classnames';

const App: React.FC<{ status?: ResultStatusType }> = ({ status = '403' }) => {
    const navigate = useNavigate();
    return (
        <div
            className={cn('bg-[var(--body-color)]', {
                'h-screen': status === '404',
            })}
        >
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                <Result
                    title={`${
                        status === '404'
                            ? '404 Page Not Found'
                            : 'Hi, This page is under construction and will be available soon!'
                    }`}
                    status={status}
                    extra={
                        <Button type="primary" className="!h-auto !py-1.5 !text-base" onClick={() => navigate('/')}>
                            Back To Homepage
                        </Button>
                    }
                />
            </div>
        </div>
    );
};

export default App;
