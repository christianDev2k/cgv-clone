import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'components';

const App: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[var(--body-color)]">
            <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                <Result
                    title="Hi, This page is under construction and will be available soon!"
                    status="403"
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
