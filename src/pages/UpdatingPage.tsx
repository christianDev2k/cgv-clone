import { ResultStatusType } from 'antd/es/result';
import { UpdatingPageTemplate } from 'components';

const UpdatingPage: React.FC<{ status?: ResultStatusType }> = ({ status = '403' }) => {
    return <UpdatingPageTemplate status={status} />;
};

export default UpdatingPage;
