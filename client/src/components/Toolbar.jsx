import React, { useState } from 'react';
import "./../styles/toolbar.scss"
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import canvasState from '../store/canvasState';
import Eraser from "../tools/Eraser";

const Toolbar = () => {
 const [colorActual, setColorActiual] = useState()
    const changeColor = e => {
        setColorActiual(e.target.value)
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }

      const download = () => {
        const dataUrl = canvasState.canvas.toDataURL()
        console.log(dataUrl)
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = canvasState.sessionid + ".jpg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    return (
       
            <div className="toolbar">
                <button className="toolbar__btn brush" onClick={() => {
                    toolState.setStrokeColor(colorActual)
                    toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionid))
                }}/>
            <button className="toolbar__btn rect" onClick={() => {
                 toolState.setStrokeColor(colorActual)
                toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionid))
            }}/>
              
                <button className="toolbar__btn eraser" onClick={() => {
                     toolState.setStrokeColor("white")
                     toolState.setTool(new Eraser(canvasState.canvas, canvasState.socket, canvasState.sessionid))
                    
                }}/>
              
                <input  onChange={e => changeColor(e)}  style={{marginLeft:10}} type="color"/>
                <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
            <button className="toolbar__btn redo" onClick={() => canvasState.redo()}/>
                <button className="toolbar__btn save"  onClick={()=> download()}/>
            </div>
    )
};

export default Toolbar;