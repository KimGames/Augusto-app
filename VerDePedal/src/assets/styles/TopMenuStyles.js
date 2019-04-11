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

import { Platform, StyleSheet } from 'react-native';
import { Colors, width } from './GlobalTheme';

export const styles = StyleSheet.create({
    menuView: {
        flex: 0.1,
        flexDirection   : 'row',
        backgroundColor : 'transparent',
        height          : 50,
        width           : width,
        marginTop       : Platform.OS === 'ios' ? 30 : 5
    },
    menuButton: {
        alignItems     : 'flex-start',
        justifyContent : 'center',
        margin         : 20
    },
    optionsButton: {
        flex           : 1,
        alignItems     : 'flex-end',
        justifyContent : 'center',
        margin         : 20
    },
    title: {
        flex       : 1,
        alignItems : 'center',
        marginTop  : 10
    },
    titleText: {
        fontSize : 20,
        color    : 'white'
    },
});