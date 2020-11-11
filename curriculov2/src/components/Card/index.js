import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

// const Card = ({titulo, children})
const Card = (props) => {
    return (
        <>
          <View style={style.card}>
              <Text style={style.card_text_title}>{props.titulo}</Text>
              {props.children}
            </View>
        </>
    )
}

export default Card;