import styled from "styled-components"
import IconButton from "../../IconButton"

const Figure = styled.figure`
    width: ${(props) => (props.$expanded ? '90%' : '45%')};
    box-sizing: border-box;
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'Gandhi Sans Bold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = ({ photo, expanded = false, selectedZoom, handleFavorite }) => {

    const favoriteIcon = photo.favorito ? "/icon/favorito-activo.png" : "/icon/favorito.png";

    return (
        <Figure $expanded={expanded} id={`foto-${photo.id}`}>
            <img src={photo.path} alt={photo.alt} />
            <figcaption>
                <h3>{photo.titulo}</h3>
                <Footer>
                    <h4>{photo.fuente}</h4>
                    <IconButton onClick={() => handleFavorite(photo)}>
                        <img src={favoriteIcon} alt="Icono de favorito" />
                    </IconButton>
                    {!expanded && <IconButton
                        aria-hidden={expanded}
                        onClick={() => selectedZoom(photo)}
                    >
                        <img src="/icon/expandir.png" alt="Icono de expandir" />
                    </IconButton>}
                </Footer>
            </figcaption>
        </Figure>
    )
}

export default Image