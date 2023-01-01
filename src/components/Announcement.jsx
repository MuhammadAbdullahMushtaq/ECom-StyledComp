import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background-color: teal;
`
const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over 50$
        </Container>
    )
}

export default Announcement