import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles/index"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import bannerImg from "./assets/banner.png"
import Gallery from "./components/Gallery"
import photos from "./photos.json"
import { useState, useEffect } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

const BackgroundGradient = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainet = styled.div`
  width: 95%;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const GalleryContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
`

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })
    setGalleryPhotos(filteredPhotos)
  }, [filter, tag])

  const handleFavorite = (photo) => {

    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorito: !photo.favorito
      })
    }

    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorito: galleryPhoto.id === photo.id ? !galleryPhoto.favorito : galleryPhoto.favorito
      }
    }));
  }

  return (
    <>
      <BackgroundGradient>
        <GlobalStyles />
        <AppContainet>
          <Header
            filter={filter}
            setFilter={setFilter}
          />
          <MainContainer>
            <Sidebar />
            <GalleryContainer>
              <Banner
                text="La galería más completa del espacio"
                backgroundImage={bannerImg}
              />
              <Gallery
                selectedPhoto={photo => setSelectedPhoto(photo)}
                photos={galleryPhotos}
                handleFavorite={handleFavorite}
                setTag={setTag}
              />

            </GalleryContainer>

          </MainContainer>

        </AppContainet>
          <Footer />
          
        <ModalZoom
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          handleFavorite={handleFavorite}
        />

      </BackgroundGradient>
    </>
  )
}

export default App
