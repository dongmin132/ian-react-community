import styled from "styled-components";

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:15px;
`

const Form = ({children, onSubmit}) => {
    return <StyledForm>{children}</StyledForm>
}

export default Form;