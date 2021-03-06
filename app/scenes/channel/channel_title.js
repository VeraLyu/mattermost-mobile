// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {getCurrentChannel} from 'service/selectors/entities/channels';
import {getTheme} from 'service/selectors/entities/preferences';

function ChannelTitle(props) {
    const channelName = props.currentChannel.display_name;
    return (
        <TouchableOpacity
            style={{flexDirection: 'row', flex: 1}}
            onPress={() => props.emitter('show_channel_info')}
        >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: props.theme.sidebarHeaderTextColor, fontSize: 15, fontWeight: 'bold'}}>
                    {channelName}
                </Text>
                <Icon
                    style={{marginHorizontal: 6}}
                    size={12}
                    name='chevron-down'
                    color={props.theme.sidebarHeaderTextColor}
                />
            </View>
        </TouchableOpacity>
    );
}

ChannelTitle.propTypes = {
    currentChannel: PropTypes.object,
    emitter: PropTypes.func.isRequired,
    theme: PropTypes.object
};

ChannelTitle.defaultProps = {
    currentChannel: {},
    theme: {}
};

function mapStateToProps(state) {
    return {
        currentChannel: getCurrentChannel(state),
        theme: getTheme(state)
    };
}

export default connect(mapStateToProps)(ChannelTitle);
