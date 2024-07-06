import styled from "styled-components"
import Title from "../Title"
import Tag from "./Tags"
import Popular from "./Popular"
import Image from "./Image"

const GalleryContainer = styled.div`
    display: flex;
`
const FluidSection = styled.section`
    flex-grow: 1;
`
const ImageContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px 5%;
`

const Gallery = ({ photos = [], selectedPhoto, handleFavorite, setTag }) => {
    return (
        <>
            <Tag setTag={setTag} />
            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue por la galería</Title>
                    <ImageContainer>
                        {
                            photos.map((photo) => {
                                return (
                                    <Image
                                        handleFavorite={handleFavorite}
                                        selectedZoom={selectedPhoto}
                                        key={photo.id}
                                        photo={photo}
                                    />
                                )
                            })
                        }
                    </ImageContainer>
                </FluidSection>
                <Popular />

            </GalleryContainer>
        </>
    )
}

export default Gallery