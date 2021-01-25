import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../colors';
import { Stores } from '../../context';
import { useStoreContext } from '../../context/Store';
import RoundButton from './RoundButton';

const Container = styled.div`
  padding: 50px;

`

const ColorPicker = () => {

    const context = useStoreContext()
    const actionPanel = context[Stores.BOARDSTATE]?.actionPanel
    const activeCol = context[Stores.BOARDSTATE]?.activeCol

    const onColorSelect = (color: COLORS) => {

        if (activeCol !== undefined) {
            let updatedActionPanel: any = actionPanel?.map((it, index) => index != activeCol ? it : color)

            context?.set?.(Stores.BOARDSTATE, {
                actionPanel: updatedActionPanel
            })

        }
    }


    return (

        <Container><h5>Color selector</h5>
            <RoundButton onColorClick={onColorSelect} />
        </Container>

    );
}

export default ColorPicker;
