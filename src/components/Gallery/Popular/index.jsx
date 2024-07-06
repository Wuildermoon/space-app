import { styled } from "styled-components"
import Title from "../../Title"
import photos from './popular-photos.json'

const PhotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image = styled.img`
    max-width: 200px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <section>
            <Title $align='center'>Populares</Title>
            <PhotosColumn>
                {photos.map(foto => <Image key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </PhotosColumn>
            <Button>Ver más</Button>
        </section>
    )
}

export default Populares