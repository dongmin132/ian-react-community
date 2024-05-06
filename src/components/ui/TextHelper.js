import styled from 'styled-components';

const StyledText = styled.p`
color: red;
font-size: 11px;
align-self: flex-start;
margin-top: auto;
`

const TextHelper = ({ children }) => {
    return <StyledText>{children}</StyledText>;
}

export default TextHelper;