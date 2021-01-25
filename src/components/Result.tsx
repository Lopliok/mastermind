import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Stores } from '../context';
import { useStoreContext } from '../context/Store';
import { getRandomInt } from '../utils';
import BoardRound from './BoardElements/Round';

const Board = styled.div`
    padding: 50px 0px;
    display: flex;
justify-content: flex-end;
`
const Row = styled.div`
display: flex;
`


const Result = () => {

    const context = useStoreContext()

    const result = context[Stores.BOARDSTATE]?.result
    const actionPanelData = context[Stores.BOARDSTATE]?.actionPanel

    const colorFieldsKey = [0, 1, 2, 3, 4]


    useEffect(() => {
        if (!result?.every(it => it !== undefined)) {

            try {

                const restoredResultText = localStorage.getItem('results')
                const restoredResult = restoredResultText ? JSON.parse(restoredResultText) : undefined


                if (!restoredResult) {
                    let randomColors: any = []
                    colorFieldsKey.map(position => {
                        const randomNumber = getRandomInt(9)
                        randomColors[position] = randomNumber
                    })

                    context?.set?.(Stores.BOARDSTATE, {
                        result: randomColors
                    })

                    const parsedResult = JSON.stringify(randomColors)
                    localStorage.setItem('results', parsedResult)

                } else {


                    context?.set?.(Stores.BOARDSTATE, {
                        result: restoredResult
                    })


                }



            } catch (error) {

            }
        }


    }, [])


    return (
        /*   <Board>
              {<div>
                  Result:
              <Row>
                      {colorFieldsKey?.map((col, i) => <>
                          <BoardRound key={col} type="selector" selectedColor={result?.[col as any]} />
                      </>)}
                  </Row>
              </div>}
          </Board> */
        <></>
    );
}

export default Result;
