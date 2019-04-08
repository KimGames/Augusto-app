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
import { Platform, View } from 'react-native';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import {HomePage} from "./views/HomePage/HomePage";

export class Routes extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount(): void {
        this._isMounted = true;
    }

    componentWillUnmount(): void {
        this._isMounted = false;
    }

    render(): * {
        return (
            <Router>
                <Scene key={ 'root' }>
                    <Scene
                        key={ 'homepage' }
                        component={ HomePage }
                        title={ 'Home' }
                        initial={ true }
                    />
                    {/*<Drawer
                        hideNavBar={ true }
                        key={ 'drawerMenu' }
                        contentComponent={ SideMenu }
                        drawerWidth={ 250 }
                        drawerPosition={ 'left' }
                    >
                        <Scene
                            key={ 'activities' }
                            component={ ActivitiesPage }
                            title={ 'Activities' }
                            initial={ false }
                            hideNavBar={ true }
                        />
                        <Scene
                            key={ 'ranking' }
                            component={ RankingPage }
                            title={ 'Ranking' }
                            initial={ false }
                            hideNavBar={ true }
                        />
                    </Drawer>*/}
                </Scene>
            </Router>
        );
    }
}
