/*
 * [EN]
 * Copyright (C) Kyros Technologies, Inc - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Kim Ruan <kimr@kyros.com.br>, April 2018
 *
 *
 * [NR]
 * Copyright (C) Kyros Technologies, Inc - Alle rettigheter reservert
 *
 * Uautorisert kopiering av denne filen, via hvilket som helst medium, er strengt forbudt
 * Egen og konfidensiell
 * Skrevet av Kim Ruan <kimr@kyros.com.br>, April 2018
 *
 *
 * [PT-BR]
 * Copyright (C) Kyros Technologies, Inc - Todos os direitos reservados
 *
 * Cópias não autorizadas deste arquivo, através de qualquer meio é estritamente proibido
 * Confidenciais e proprietários
 * Escrito por Kim Ruan <kimr@kyros.com.br>, Abril 2018
 */

import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import { styles } from '../assets/styles/TopMenuStyles';

export class TopMenu extends Component {

    _isMounted = false;
    Screen: string;

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    componentDidMount(): void {
        this._isMounted = true;
    }

    componentWillUnmount(): void {
        this._isMounted = false;
    }

    renderMiddleComponent(): * {
        return (
            <View style={ styles.title }>
                <Text style={ styles.titleText }>{ this.props.Screen }</Text>
            </View>
        );
    }

    render(): * {
        return (
            <View style={ styles.menuView }>
                <View style={ styles.menuButton }>
                    <Icon
                        name={ Platform.OS === 'ios' ? 'ios-menu' : 'md-menu' }
                        size={ 30 }
                        type={ 'ionicon' }
                        color={ 'white' }
                        underlayColor={ 'transparent' }
                        onPress={ () => Actions.drawerOpen() }
                    />
                </View>

                { this.renderMiddleComponent() }

                <View style={ styles.optionsButton }>
                    <Icon
                        name={ Platform.OS === 'ios' ? 'ios-more' : 'md-more' }
                        size={ 30 }
                        type={ 'ionicon' }
                        color={ 'white' }
                        underlayColor={ 'transparent' }
                        onPress={ () => alert('show options') }
                    />
                </View>
            </View>
        );
    }
}

