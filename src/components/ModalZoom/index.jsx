import styled from "styled-components"
import Image from "../Gallery/Image"
import IconButton from "../IconButton"

const Overlay = styled.div`
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `
const StyledDialog = styled.dialog`
        position: absolute;
        top: 294px;
        background: transparent;
        padding: 0;
        border: 0;
        width: 1156px;
        display: flex;
        justify-content: center;
        form {
            button {
                position: relative;
                top: 20px;
                right: 60px;
            }
        }
    `

const ModalZoom = ({ photo, onClose, handleFavorite }) => {

    return (
        <>
            {photo && (
                <>
                    <Overlay />
                    <StyledDialog
                        open={!!photo}
                        onClose={onClose}
                        handleFavorite={handleFavorite}
                    >
                        <Image photo={photo} expanded={true} />
                        <form method="dialog">
                            <IconButton>
                                <img src="/icon/cerrar.png" alt="Icono de cerrar" />
                            </IconButton>
                        </form>
                    </StyledDialog>
                </>
            )}
        </>
    )
}

export default ModalZoom