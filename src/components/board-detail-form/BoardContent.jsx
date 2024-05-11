import { useState } from 'react';
import { Section, Square, Image, Content, CommentLike, View, BoldText } from './BoardContentStyled';


const BoardContent = ({board}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    return (
        <Section>
            <Square>
                <Image src={BASE_URL+board.contentImage} id="image" />
            </Square>
            <Content>{board.content}</Content>

            <CommentLike>
                <View>
                    <b>123<br />조회수</b>
                </View>
                <View>
                    <b>123<br />댓글</b>
                </View>
            </CommentLike>
        </Section>
    )
}

export default BoardContent;