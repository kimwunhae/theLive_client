import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>it's Feed Page</Text>
                <Button title="Thumbnail" onPress={() => this.props.navigation.navigate('Watching')} />
            </View>
        )
    }
}



