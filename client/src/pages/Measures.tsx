import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@codegouvfr/react-dsfr/Table';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';

function Measures() {
    const data = computeData();
    return (
        <div>
            <Header />
            <Table data={data} caption="Mesures"></Table>
        </div>
    );

    function computeData() {
        return [
            {
                label: 'Scan des dépendances',
                measureId: 'DEPENDENCY_SCAN',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: 'Scan du code source',
                measureId: 'SOURCE_CODE_SCAN',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: 'Détection de fuite de secrets',
                measureId: 'SECRET_LEAK_DETECTION',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: 'Certificat HTTPS',
                measureId: 'HTTPS_CONNECTION',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: 'Scan anti-malware automatique',
                measureId: 'MALWARE_SCAN',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: "Implémentation d'une Content-Security-Policy",
                measureId: 'CSP_HEADER_IMPLEMENTED',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: 'Inscription à programme Bug Bounty',
                measureId: 'BUG_BOUNTY',
                value: Math.floor(Math.random() * 100),
            },
            {
                label: 'Implémentation de X-Frame-Option',
                measureId: 'X_FRAME_OPTION_HEADER_IMPLEMENTED',
                value: Math.floor(Math.random() * 100),
            },
        ].map((row) => {
            return [
                <Link to={`/measures/${row.measureId}`}>{row.label}</Link>,
                <ProgressBar progress={row.value} />,
            ];
        });
    }
}

export { Measures };
