import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Deck from './Deck'

export default function Decks() {
    return (
        <View>
            <Deck title="udacitycards" quantity={1}></Deck>
        </View>
    )
}