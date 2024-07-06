import styled from "styled-components"
import SidebarItem from "./SidebarItem"
import SidebarItemList from "./sidebar-Item.json"

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    {
                        SidebarItemList.map((item, index) => (
                            <SidebarItem
                                text={item.text}
                                activeIcon={item.activeIcon}
                                inactiveIcon={item.inactiveIcon}
                                active={item.active}
                                key={index}
                            />)
                        )
                    }
                </StyledList>
            </nav>
        </aside>
    )
}
export default Sidebar