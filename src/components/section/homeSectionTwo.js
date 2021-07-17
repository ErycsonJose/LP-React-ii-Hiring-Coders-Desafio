import React from 'react';
import * as S from './styled';

export default function HomeSectionTwo() {
    return (
        <S.SectionContainerTwo>
            <S.DivTwoTitle1>
                Seja o primeiro a saber!
            </S.DivTwoTitle1>
            <S.DiveTwoTitle2>
                Preencha o formúlario a baixo e nós avisaremos a você
            </S.DiveTwoTitle2>
            <S.DivTwoInput placeholder='Nome'/>        
            <S.DivTwoInput placeholder='Email'/>        
            <S.DivTwoInput placeholder='Celular'/>
            <S.Button type="button" >Avise-me!</S.Button>
            <S.DivTwoContent>
                Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
            </S.DivTwoContent>
        </S.SectionContainerTwo>
    )
}