import { Tag as TagA, TagProps as TagPropsA } from 'antd';

type TagProps = TagPropsA & {
    // Tag
};

const Tag = (props: TagProps) => {
    return <TagA {...props} />;
};

export default Tag;
