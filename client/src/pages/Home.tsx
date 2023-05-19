import { Header } from '../components/Header';
import { Table } from '@codegouvfr/react-dsfr/Table';

function Home() {
    const tableData = [['Audioconf', '57%']];
    return (
        <div>
            <Header />
            <Table data={tableData} caption="Produits référencés"></Table>
        </div>
    );
}

export { Home };
