import { useState } from 'react';
import { Section, Square, Image, Content, CommentLike, View } from './BoardContentStyled';
import { ReactComponent as EmptyHeart } from '../../img/emptyHeart.svg';

const BoardContent = ({board}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    return (
        <Section>
            {board.boardImage?<Square>
                <Image src={BASE_URL+board.boardImage}/>
            </Square>:<></>}
            <Content>{board.boardContent}</Content>

            <CommentLike>
                <View>
                    <EmptyHeart />
                    <b>{board.boardViewCount}<br />조회수</b>
                </View>
                <View>
                    <b>{board.boardCommentCount}<br />댓글</b>
                </View>
            </CommentLike>
        </Section>
    )
}

export default BoardContent;