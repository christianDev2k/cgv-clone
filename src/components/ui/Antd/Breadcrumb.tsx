import { Breadcrumb as BreadcrumbA, BreadcrumbProps as BreadcrumbPropsA } from 'antd';

type BreadcrumbProps = {
    (props: BreadcrumbPropsA): JSX.Element;
};

const Breadcrumb: BreadcrumbProps = props => {
    return <BreadcrumbA {...props} />;
};

export default Breadcrumb;
