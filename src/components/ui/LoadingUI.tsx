import { Skeleton } from 'components';

const LoadingUI = () => {
    return (
        <div className="h-screen max-w-screen-lg mx-auto mt-10">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="my-10">
                    <Skeleton active />
                </div>
            ))}
        </div>
    );
};

export default LoadingUI;
