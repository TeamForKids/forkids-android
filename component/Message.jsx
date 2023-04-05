import React, { useState } from "react";
import {StyleSheet, Text, View} from 'react-native';

const Message = ({ text, my}) => {
    const isMyMessage = my
        
    return (
        <ListItem className={isMyMessage? style.wrapper : null}>
            <Stack>
                <div className={isMyMessage? style.my_message : style.bot_message}>{text}</div>
            </Stack>
        </ListItem>
                    
    );
}

const style = StyleSheet.create({
    wrapper: {
        marginTop:50,
    },
    my_message: {
        backgroundColor :'green',
        fontWeight:'bold',
        fontSize:30,
    },
    bot_message: {
        color : 'white',
        fontWeight:'bold',
        fontSize:30,
    }
})

export default Message;