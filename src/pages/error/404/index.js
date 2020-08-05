import React from 'react'
import { Link } from 'react-router-dom';

import PageDefault from '../../../Componentes/PageDefault';

import { BackgroundWrapper, ContainerMessage, DescriptionError, DescriptionMessage, Button } from './styled';

const Page404 = () => (
    <PageDefault>
        <BackgroundWrapper>
            <ContainerMessage>
                <DescriptionError>Oops!!</DescriptionError>
                <DescriptionMessage>
                    Não conseguimos encontrar a página que você estava procurando. :(
                </DescriptionMessage>
                <Button as={Link} to={'/'}>Voltar para home</Button>
            </ContainerMessage>
        </BackgroundWrapper>
    </PageDefault>
);

export default Page404;