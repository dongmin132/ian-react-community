import { Background, LoadingText } from "./Style";

const Loading = () => {
    return (
    <Background>
        <LoadingText>잠시만 기다려 주세요.</LoadingText>
        <img src={`${process.env.PUBLIC_URL}/images/spinner.gif`} alt="로딩중" width="5%" />
    </Background>
    )
}

export default Loading;