import { Table } from '@codegouvfr/react-dsfr/Table';
import { Header } from '../components/Header';

function Product() {
    return (
        <div>
            <Header />
            <Table data={[]}></Table>
        </div>
    );
}

export { Product };
