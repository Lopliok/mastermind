import React from 'react';
import styled from 'styled-components';
import { Stores } from '../context';
import { useStoreContext } from '../context/Store';
import BoardRound from './BoardElements/Round';

const Board = styled.div`
    padding-top: 50px;
`
const Row = styled.div`
display: flex;
justify-content: flex-end;
`


const ActionPanel = () => {

    const context = useStoreContext()

    const activeCol = context[Stores.BOARDSTATE]?.activeCol
    const actionPanelData = context[Stores.BOARDSTATE]?.actionPanel

    const onRoundClick = (key: 0 | 1 | 2 | 3 | 4) => {

        context?.set?.(Stores.BOARDSTATE, {
            activeCol: key
        })
    }



    const selectableCols = [0, 1, 2, 3, 4]

    return (
        <Board>
            <Row>
                {selectableCols.map((col) => <BoardRound key={col} type="selector" active={activeCol !== undefined ? col === activeCol : false} onClick={() => onRoundClick(col as any)} selectedColor={actionPanelData?.[col]} />)}
            </Row>
        </Board>
    );
}

export default ActionPanel;
