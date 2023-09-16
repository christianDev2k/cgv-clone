import { Menu as MenuA, MenuProps as MenuPropsA } from 'antd';

type MenuObject = {
    (props: MenuPropsA): JSX.Element;
};

const Menu: MenuObject = props => {
    return <MenuA {...props} />;
};

export default Menu;
