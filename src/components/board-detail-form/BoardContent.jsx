import { useState } from 'react';
import { Section, Square, Image, Content, CommentLike, View } from './BoardContentStyled';


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
                    <b>{board.boardLikeCount}<br />조회수</b>
                </View>
                <View>
                    <b>{board.boardViewCount}<br />댓글</b>
                </View>
            </CommentLike>
        </Section>
    )
}

export default BoardContent;