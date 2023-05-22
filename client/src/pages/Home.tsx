import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Table } from '@codegouvfr/react-dsfr/Table';
import { ProgressBar } from '../components/ProgressBar';

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
        <div>
            <Header />
            <Table headers={headers} data={tableData} caption="Produits référencés"></Table>
        </div>
    );
}

export { Home };
