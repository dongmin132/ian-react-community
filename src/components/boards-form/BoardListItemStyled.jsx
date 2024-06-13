import styled from 'styled-components';
import { ReactComponent as EmptyHeart } from '../../img/emptyHeart.svg';
import { ReactComponent as CommentButton } from '../../img/commentBubble.svg';
import { ReactComponent as FullHeart } from '../../img/redHeart.svg';

export const Content = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    height: 83px;
    border-bottom: 1px solid #00000029;
    
`;

export const Title = styled.div`
    font-size: 24px;
    height: 31px;
    font-weight: bold;
    width: fit-content;
    
`;

export const Meta = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    height:auto;
`;

export const InfoP = styled.p`
    margin: 0px;
`;

export const Coment = styled.div`
    display: flex;
    align-items: center;
    hegiht: 36px;
    margin-bottom: 10px;
`;

export const Circle = styled.div`
    width: 36px;
    height: 36px;
    background: #D9D9D9;
    border-radius: 50%;
    margin-right: 10px;
`;

export const StyledBoardListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 500px;
    height: 100%;
    margin: 30px;
    border-radius: 16px;
    background-color: white;
    padding: 10px 20px;
`;

export const EmptyHeartStyled = styled(EmptyHeart)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    svg {
        fill: currentColor;
    }
    &:hover {
        color: lightgrey;
    }
`;

export const FullHeartStyled = styled(FullHeart)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    svg {
        fill: currentColor;
    }
    &:hover {
        color: lightgrey;
    }
`;

export const CommentButtonStyled = styled(CommentButton)`
    width: 27px;
    height: 27px;
    cursor: pointer;
    svg {
        fill: currentColor;
    }
    &:hover {
        color: lightgrey;
    }
`;

export const InfoBlock = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TotalLikes = styled.b`
    margin-top: 10px;
`;

export const LineContent = styled.div`
    margin-top: 10px;
    white-space: pre-line;
`;

export const Expended = styled.span`
    color: grey;
    cursor: pointer;
`;