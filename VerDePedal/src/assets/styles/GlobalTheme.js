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

import { Platform, Dimensions } from 'react-native';

export const width  = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const Colors = {
    No_Connection : '#B52424',
    White         : '#FFFFFF',
    Blue          : '#00FFFF',
    Black         : '#000000',
    Error         : '#FF0000',
    Grey          : '#d2d2d2',
    CircleColor   : '#007AFF',
    Yellow        : '#FFF41F',
    Activity      : '#BBDAFF',
    Obfuscated    : '#F5FCFF',
    TopMenuColor  : '#6D6571',
};

export const Fonts = {
    OpenSans  : 'Open Sans',
    CodeLight : 'Code Light',
    MyriadPro : 'Myriad Pro',
};

export const FontsStyle = {
    Bold   : 'bold',
    Italic : 'italic',
};