import styled from "styled-components"

const StyledSidebarItem = styled.li`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 16px;
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    color: ${props => props.$active ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$active ? "Gandhi Sans Bold" : "Gandhi Sans Regular"};
    p {
        min-width: 100%;
        margin: 0;
    }
`

const SidebarItem = (
    { children, text, activeIcon, inactiveIcon, active = false }
) => {
    return (
        <StyledSidebarItem $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt="Icono" />
            <p>{text}</p>
            {children}
        </StyledSidebarItem>
    )
}

export default SidebarItem