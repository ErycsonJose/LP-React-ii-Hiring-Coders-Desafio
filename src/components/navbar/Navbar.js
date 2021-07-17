import React from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
    return (
        <S.navbar>
            <S.navbarContainer>
                <h1>
                    Jumper
                </h1>                                
            </S.navbarContainer>
        </S.navbar>
    )
}
