import styled from "styled-components";

const StyledTitle = styled.h1`
margin-bottom: 10%;
`

const Title = ({ title }) => {
    return <StyledTitle>{title}</StyledTitle>;
}

export default Title;