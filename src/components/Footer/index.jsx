import { styled } from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const FooterText = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Footer() {
    return (
        <StyledFooter>
            <IconContainer>
                <li>
                    <a href="#">
                        <img src="/img/socialNetworks/facebook.svg" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/socialNetworks/twitter.svg" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/socialNetworks/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </IconContainer>
            <FooterText>Desarrollado por Alura</FooterText>
        </StyledFooter>
    );
}

export default Footer