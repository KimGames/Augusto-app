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

import React, {Component} from 'react';
import {Platform, View, ScrollView, Image, Text} from 'react-native';
import {TopMenu} from "../../components/TopMenu";
import { SearchBar } from 'react-native-elements';

export class TrilhaPage extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };
    }

    componentDidMount(): void {
        this._isMounted = true;
    }

    componentWillUnmount(): void {
        this._isMounted = false;
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    render(): * {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
                <TopMenu Screen={ 'Trilhas' }/>

                <SearchBar
                    placeholder={"Procurar"}
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
            </ScrollView>
        );
    }
}
