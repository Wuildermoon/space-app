import styled from "styled-components";
import tags from "./tags.json"

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 56px;
`
const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const TagItem = styled.li`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    list-style: none;
    &:hover {
      border-color: #C98CF1;
    };
`

const TagList = styled.ul`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tag = ({ setTag }) => {
    return (
        <TagsContainer>
            <TagTitle>Busque por tags: </TagTitle>
            <TagList>
                {
                    tags.map(tag => {
                        return (
                            <TagItem
                                key={tag.id}
                                onClick={() => setTag(tag.tag)}
                            >
                                {tag.titulo}
                            </TagItem>)
                    })
                }
        </TagList>
        </TagsContainer >
    )
}

export default Tag