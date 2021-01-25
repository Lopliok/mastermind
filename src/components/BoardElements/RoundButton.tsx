import React from 'react';
import styled from 'styled-components'
import { COLORS, colorTranslations, translateEnum } from '../../colors';


const Button = styled.div<{ color: any, onClick: any }>`

background-color: ${(props: any) => translateEnum(colorTranslations, props.color)};
margin: 16px;
width: 40px;
height: 40px;
border-radius: 50%;
box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;

&:hover {
   
    opacity: 0.8;
}

`

type Props = {
    onColorClick: (color: COLORS) => void

}


const RoundButton = ({ onColorClick }: Props) => {
    let names = []

    for (var n in COLORS) {
        if (typeof COLORS[n] === 'number') names.push(n);
    }

    return (
        <>{Object.keys(names).map((color) => <Button color={color} key={color} onClick={() => onColorClick(color as any)} />)}
        </>
    );
}

export default RoundButton;
