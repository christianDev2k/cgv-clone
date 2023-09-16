import { Menu as MenuA, MenuProps as MenuPropsA } from 'antd';

type MenuProps = {
    (props: MenuPropsA): JSX.Element;
};

const Menu: MenuProps = props => {
    return <MenuA {...props} />;
};

export default Menu;
