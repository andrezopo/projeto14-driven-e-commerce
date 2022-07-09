import styled from "styled-components"
import React from "react";

import RolarTopo from "../shared/RolarTopo";

export default function TelaCheckout(){
    return(
        <Universal>
            <RolarTopo />
            <h1>Esta é a Tela de Checkout</h1>
        </Universal>
    )
}

const Universal = styled.div`
    height: 500px;
    margin-top: 120px;
`
