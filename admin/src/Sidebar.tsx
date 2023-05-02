import React, { useRef, useState } from 'react'
import { AiOutlineMenu,AiOutlineSetting,AiOutlineHome,AiOutlinePlusSquare } from "react-icons/ai";
import { MdExpandLess,MdExpandMore } from "react-icons/md";
import logo from './logo.svg';

const menuItems = [
    { name: "Home", icon: "home" },
    {
        name: "Setting", icon: "settings",
        items: [
            'Display', 'Edit', 'Delete'
        ]
    },{
        name: "Create", icon: "create",
        items: [ 'food', 'user']
    }
]
type Item = {
    name: string,
    icon: string,
    items?: string[]
}

const Icon = ({ icon }: { icon: string }) => {
    if (icon === "home") {
        return <AiOutlineHome    />
    }else if (icon === "settings") {
        return <AiOutlineSetting />
    }else if (icon === "less") {
        return <MdExpandLess />
    }else if (icon === "more") {
        return <MdExpandMore />
    }else if (icon === "create") {
        return <AiOutlinePlusSquare />
    }else{
        return <AiOutlineMenu />
    }
}

const NavHeader = () => (
    <header>
        <button type="button" className='sidebarheader'>
            <img src={logo}/>
        </button>
        <h1>Admin</h1>
    </header>
)

type ButtonProps = {
    onClick: (item: string) => void;
    name: string;
    icon?: string;
    isActive: boolean;
    hasSubNav?: boolean;
}

const NavButton = (({ onClick, name, icon, isActive, hasSubNav }: ButtonProps) => {
    return (
        <button type="button"
            onClick={() => onClick(name)} className={isActive ? 'active' : ''}>
            {icon && <Icon icon={icon} />}
            <span>{name}</span>
            {hasSubNav && <Icon icon={`${isActive ? "less" : "more"}`} />}
        </button>
    )
})

type SubMenuProps = {
    item: Item;
    activeItem: string;
    hanleClick: (args0: string) => void;
}

const SubMenu = ({ item, activeItem, hanleClick }: SubMenuProps) => {
    const navRef = useRef<HTMLDivElement>(null);
    const isSubNavOpen = (item: string, items: string[] | undefined) =>
        items!.some((i: any) => i === activeItem)
        || item === activeItem

    return (
        <div className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
            style={{
                height: !isSubNavOpen(item.name, item.items) ? 0 : navRef.current?.clientHeight
            }}>
            <div className="sub-nav-inner" ref={navRef}>
                {item?.items?.map((subItem) => (
                    <NavButton onClick={hanleClick} name={subItem} isActive={activeItem === subItem} />
                ))}
            </div>
        </div>
    )
}

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState<string>("")
    const hanleClick = (item: string) => {
        setActiveItem(
            item !== activeItem ? item : '')
    }

    return (
        <aside className='sidebar'>
            <NavHeader />
            {menuItems.map((item) => (
                <div>
                    {!item.items && (
                        <NavButton
                            onClick={hanleClick}
                            name={item.name}
                            icon={item.icon}
                            isActive={activeItem === item.name}
                            hasSubNav={!!item.items} />
                    )}
                    {item.items && (
                        <div>
                            <NavButton
                                onClick={hanleClick}
                                name={item.name}
                                icon={item.icon}
                                isActive={activeItem === item.name}
                                hasSubNav={!!item.items} />
                            <SubMenu item={item} activeItem={activeItem} hanleClick={hanleClick} />
                        </div>
                    )}
                </div>
            ))}
        </aside>
    )
}
