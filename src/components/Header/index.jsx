import styled from "styled-components"
import Fieldset from "../Input"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    img {
        width: 212px;
    }
`

const Header = ({filter, setFilter}) => {
    return (
        <StyledHeader>
            <img className="logo" src="./img/logo.png" alt="Logo de Space App" />
            <Fieldset setFilter={setFilter} />
        </StyledHeader>
    )
}

export default Header