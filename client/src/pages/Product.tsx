import { Table } from '@codegouvfr/react-dsfr/Table';
import { Header } from '../components/Header';

const data = {
    security: {
        human: {
            SECRET_LEAK_MONITORING: true,
            SECRET_LEAK_AUTOMATION: false,
        },
        software: {
            DEPENDENCIES_SCAN: true,
            SOURCE_CODE_SCAN: true,
            HTTPS_ENABLED: true,
            HTTPS_SERVER_REDIRECTION_ENABLED: true,
            HTTPS_CLIENT_REDIRECTION_ENABLED: false,
            MALWARE_SCAN: false,
            CSP_IMPLEMENTED: true,
        },
    },
    accessibility: {},
};

function Product() {
    return (
        <div>
            <Header />
            <Table data={[]}></Table>
        </div>
    );
}

export { Product };
