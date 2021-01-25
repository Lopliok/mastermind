import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../colors';
import { Conformity, Stores } from '../../context';
import { useStoreContext } from '../../context/Store';

const Container = styled.div`
 padding-top: 30px;
    width: 50%;
    margin-left: auto;
`

const Button = styled.div<{ disabled: boolean }>`
    padding: 1em;
    border-radius: 14px;
    background-color: white;
  color: ${props => props.disabled ? 'lightgrey;' : '#000;'};
  border: ${props => props.disabled ? '2px solid lightgrey;' : '2px solid #4CAF50;'}; 

`

const TestButton = () => {

    const context = useStoreContext()
    const actionPanel = context[Stores.BOARDSTATE]?.actionPanel
    const activeRow = context[Stores.BOARDSTATE]?.activeRow
    const result = context[Stores.BOARDSTATE]?.result
    const data = context[Stores.BOARDSTATE]?.data
    const currentScore = context[Stores.BOARDSTATE]?.currentScore


    const onClick = () => {

        if (actionPanel?.every(it => it !== undefined)) {

            let score = {
                [Conformity.OK]: 0,
                [Conformity.BADPLACE]: 0,
                [Conformity.WRONG]: 0
            }
            let colors = {
                [COLORS.BLACK]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.BLUE]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.YELLOW]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.GREEN]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.RED]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.BROWN]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.PURPLE]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.PINK]: { max: 0, count: 0, rightPlace: 0 },
                [COLORS.ORANGE]: { max: 0, count: 0, rightPlace: 0 },
            }

            actionPanel.forEach((selectedColorField, index) => {

                if (selectedColorField && colors[selectedColorField] !== undefined) {

                    Object.keys(colors).map((colorKey) => {
                        // @ts-ignore
                        colors[colorKey as number].max = result?.filter(it => it == selectedColorField).length


                    })



                    if (result?.some(it => it == selectedColorField)) {

                        if (selectedColorField == result?.[index]) {
                            colors[selectedColorField].rightPlace++

                        } else if (colors[selectedColorField].max > (colors[selectedColorField].count)) {
                            colors[selectedColorField].count++
                        }

                        if (colors[selectedColorField].count + colors[selectedColorField].rightPlace > colors[selectedColorField].max) {
                            colors[selectedColorField].count = colors[selectedColorField].max - colors[selectedColorField].rightPlace
                        }
                    }
                }
            })

            Object.values(colors).forEach(color => {
                if (color.rightPlace != 0) {

                    score[Conformity.OK] = score[Conformity.OK] + color.rightPlace
                }
                if (color.count > 0) {
                    const diference = color.count - color.rightPlace
                    score[Conformity.BADPLACE] = score[Conformity.BADPLACE] + color.count
                }
            })

            let board = data

            if (activeRow != undefined && board != undefined) {
                board[activeRow] = actionPanel




                context?.set?.(Stores.BOARDSTATE, {
                    currentScore: (currentScore as any)?.map((row: any, index: any) => {
                        if (index == activeRow) {
                            return score
                        } else {
                            return row
                        }
                    }),
                    data: board,
                    activeRow: (activeRow + 1 as any)
                })
            }
        }

    }



    return (

        <Container>
            <Button onClick={onClick} disabled={!actionPanel?.every(it => it !== undefined) ?? false} >
                TEST OPTIONS
            </Button>
        </Container>

    );
}

export default TestButton;
