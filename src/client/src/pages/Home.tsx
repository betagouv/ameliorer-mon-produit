import { Link } from 'react-router-dom';
import { Table } from '@codegouvfr/react-dsfr/Table';
import { ProgressBar } from '../components/ProgressBar';
import { Page } from '../components/Page';

function Home() {
    const headers = ['Produit', 'Sécurité', 'Accessibilité'];
    const tableData = [
        [
            <Link to="/products/audioconf">Audioconf</Link>,
            <ProgressBar progress={57} />,
            <ProgressBar progress={31} />,
        ],
    ];

    return (
        <Page>
            <Table headers={headers} data={tableData} caption="Produits référencés"></Table>
        </Page>
    );
}

export { Home };
