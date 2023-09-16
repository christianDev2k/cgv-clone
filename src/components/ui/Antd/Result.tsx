import { Result as ResultA, ResultProps as ResultPropsA } from 'antd';

type ResultProps = ResultPropsA & {
    //
};

const Result = (props: ResultProps) => {
    return <ResultA {...props} />;
};

export default Result;
