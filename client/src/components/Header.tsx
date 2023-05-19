import { Header as DSFRHeader } from '@codegouvfr/react-dsfr/Header';

function Header() {
    return (
        <DSFRHeader
            brandTop={
                <>
                    AMÉLIORER MON
                    <br />
                    PRODUIT
                </>
            }
            homeLinkProps={{
                to: '/',
                title: 'Accueil',
            }}
        />
    );
}

export { Header };
