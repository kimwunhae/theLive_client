import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { NodePlayerView } from 'react-native-nodemediaclient'
import { RTMP_SERVER } from '../../config'

export default class Watching extends React.Component {

    render() {
        let userName = 'test'
        let inputUrl = `${RTMP_SERVER}/live${userName}`
        return (
            <NodePlayerView
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                ref={(vb) => { this.NodePlayerView = vb }}
                inputUrl={inputUrl}
                scaleMode="ScaleAspectFit"
                bufferTime={300}
                maxBufferTime={1000}
                autoplay
            />
        )
    }
}

