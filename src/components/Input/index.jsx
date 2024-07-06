import { styled } from "styled-components"
import Search from "/icon/search.png"

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`
const StyledInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const SearchIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
`;

const Input = ({setFilter}) => {
    return (
        <StyledContainer>
            <StyledInput onChange={e => { setFiltro(e.target.value) }} type="text" placeholder="Busca una foto" />
            <SearchIcon src={Search} alt="ícono de lupa" />
        </StyledContainer>
    )
}

export default Input