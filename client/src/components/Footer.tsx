import React from 'react';
import { Footer as DSFRFooter } from '@codegouvfr/react-dsfr/Footer';

function Footer() {
    return (
        <DSFRFooter
            brandTop={<>DASHLORD</>}
            accessibility="non compliant"
            homeLinkProps={{
                to: '/',
                title: 'Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)',
            }}
            personalDataLinkProps={{
                to: '#',
            }}
            termsLinkProps={{
                to: '#',
            }}
            websiteMapLinkProps={{
                to: '#',
            }}
        />
    );
}
export { Footer };
