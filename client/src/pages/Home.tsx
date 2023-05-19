import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Table } from '@codegouvfr/react-dsfr/Table';

function Home() {
    const tableData = [[<Link to="/product">Audioconf</Link>, '57%']];
    return (
        <div>
            <Header />
            <Table data={tableData} caption="Produits référencés"></Table>
        </div>
    );
}

export { Home };
