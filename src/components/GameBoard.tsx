import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Conformity, CurrentScore, Stores } from '../context';
import { useStoreContext } from '../context/Store';
import BoardRound from './BoardElements/Round';

const Board = styled.div`
display: flex;
`
const Row = styled.div<{ noBordered?: boolean }>`
display: flex;
border: 1px solid grey;
border-width: 0.5px 0.5px 0.5px 0.5px;

${(props) => {

        if (props.noBordered) {
            return css`
    border: 1px solid transparent;

`
        }
    }}
`

type Props = {
    currentScore: CurrentScore | undefined
}

const ScoreTableRow = ({ currentScore }: Props) => {

    let fields: (string | undefined)[] = []

    const rightPlacedCount = currentScore?.[Conformity.OK]
    const badPlacedCount = currentScore?.[Conformity.BADPLACE]


    for (let index = 0; index < (rightPlacedCount || 0); index++) {
        fields.push('black')
    }
    for (let index = 0; index < (badPlacedCount || 0); index++) {
        fields.push('grey')
    }



    for (let index = 0; index < 5; index++) {
        if (!fields[index]) {
            fields.push(undefined)
        }
    }


    useEffect(() => {
        if (fields.length == 5 && fields.every(it => it != undefined)) {
            window.alert('You won the game!')
        }

    }, [fields])


    return <>
        {fields.reverse().map(field => <BoardRound controlPanelColor={field} controlPanel={true} />)}
    </>

}


const GameBoard = () => {

    const context = useStoreContext()

    const data = context[Stores.BOARDSTATE]?.data
    const currentScore = context[Stores.BOARDSTATE]?.currentScore

    return (
        <Board>
            <div>


                {currentScore?.map(scoreRow => {
                    return <Row noBordered={true}>
                        <ScoreTableRow currentScore={scoreRow} />
                    </Row>
                })}
            </div>

            <div>

                {data?.map(row => {
                    return <Row>{row.map(cell => {
                        return <BoardRound selectedColor={cell} />
                    })}</Row>
                })}
            </div>
        </Board>

    );
}

export default GameBoard;
