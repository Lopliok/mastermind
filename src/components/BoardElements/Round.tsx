

import React from 'react';
import styled, { css } from 'styled-components'
import { COLORS, colorTranslations, translateEnum } from '../../colors';



const Col = styled.div`
    dborder: 1px solid grey;
    padding: 10px;
`

const Round = styled.div<{ active?: boolean, disabled?: boolean, selectedColor?: any, controlPanelColor?: string, controlPanel?: boolean }>`
    height: 30px;
  width: 30px;
  background-color: ${props => props.active ? 'none' : '#bbb'};
  opacity: ${props => props.disabled ? '0.6' : '1'};
  
  border: ${props => props.active ? '1px solid #000' : '1px solid #bbb'}; 

  border-radius: 50%;
  display: inline-block;

  ${(props) => {

        if (props.controlPanel) {

            if (props.controlPanelColor) {
                return css`
            background-color: ${props.controlPanelColor ?? 'white'};
        `
            } else {
                return css`
            background-color: white;
            border: 1px solid transparent;
        `
            }

        }

        if (props.selectedColor !== undefined) {

            return css`
            background-color: ${translateEnum(colorTranslations, props.selectedColor)};
         `
        }

    }}
`




type Props = {
    type?: "selector" | "viewer";
    active?: boolean;
    selectedColor?: COLORS;
    controlPanelColor?: string;
    controlPanel?: boolean;
    onClick?: () => void;
}


const BoardRound = ({ type = "viewer", active, selectedColor, onClick, controlPanelColor, controlPanel = false }: Props) => {




    return (
        <Col onClick={onClick} >
            <Round active={active} selectedColor={selectedColor} controlPanelColor={controlPanelColor} controlPanel={controlPanel}>

            </Round>
        </Col>
    );
}

export default BoardRound;
