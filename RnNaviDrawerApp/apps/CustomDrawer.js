/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Entypo';

class CustomDrawer extends Component {
    constructor(props) {
        super(props);

        this.items = [
            {
                navOptionIcon: 'home', //icon이름
                navOptionName: 'HOME', //menu이름
                screenName: 'Home',//component이름 -> Screen이름^^
            },
            {
                navOptionIcon: 'grid',
                navOptionName: 'DETAIL',
                screenName: 'Detail',
            },
            {
                navOptionIcon: 'laptop',
                navOptionName: 'SETTING',
                screenName: 'Setting',
            },
        ];
    }
    render() {
        return (
            <View style={style.drawer}>
                <Image
                    source={require('./image/cat2.png')}
                    style={style.profile} />
                <View style={style.menuGroup}>
                    {this.items.map((items, key) => (
                        <View key={key} style={style.menuItem}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate(items.screenName)} >
                            <View style={style.touch}>
                                <Icon name={items.navOptionIcon} size={25} style={style.icon}/>
                                <Text children={items.navOptionName} />
                            </View>
                        </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        );
    }

}
const style = StyleSheet.create({
    drawer: {
        backgroundColor: '#ccccff',
        alignItems: 'center',
        flex:1,
    },
    profile: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuGroup: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    menuItem: {
        paddingTop: 8,
        paddingLeft: 10,
    },
    icon: {
        paddingRight: 10,
    },
});

export default CustomDrawer;
