import React, { Component } from 'react'
import styles from './ChessBoard.module.css';

export class ChessBoard extends Component {

    state = {
        main_arr : [["♖","♘","♗","♔","♕","♗","♘","♖"],Array(8).fill("♙"),Array(8).fill(""),Array(8).fill(""),Array(8).fill(""),Array(8).fill(""),Array(8).fill("♟︎"),["♜","♞","♝","♚","♛","♝","♞","♜"]],
        current_peice : {
            peice : "",
            row: 0,
            col: 0,
            clicked: 0
        }
    }
    

    move = (val, row, col) => {
        let current_state = this.state.main_arr
        console.log(`I'm Pressed ${current_state[col][row]}`)
        
        if((current_state[col][row].split("*")).length > 1){
            let new_peice = (current_state[col][row].split("*"))[1] 
            current_state[col][row] = new_peice
            this.setState({current_peice : {
                peice : "",
                row: 0,
                col: 0,
                clicked: 0
            }})
        }
        else if(this.state.current_peice.clicked){
            current_state[col][row] = `${this.state.current_peice.peice}`
            current_state[this.state.current_peice.col][this.state.current_peice.row] = ""
            this.setState({current_peice : {
                peice : "",
                row: 0,
                col: 0,
                clicked: 0
            }, main_arr:current_state})
        }
        else{
            current_state[col][row] = `*${val}`
            this.setState({current_peice : {
                peice : val,
                row: row,
                col: col,
                clicked: 1
            }})
        }
        console.log(current_state)
        this.setState({main_arr: current_state})
    }

    

    render() {
        let counter = 0
        let chessboard = this.state.main_arr.map((val, col) => {
            counter++;
            return (val.map((val, row) => {
                if(counter%2){
                    if((row+1)%2){
                        return <div key={`${row}${col}`} className={styles.white} onClick={() => this.move(val, row, col)}>{val}</div>
                        
                    }
                    return <div key={`${row}${col}`} className={styles.black} onClick={() => this.move(val, row, col)}>{val}</div>
                }
                else{
                    if((row+1)%2){
                        return <div key={`${row}${col}`} className={styles.black} onClick={() => this.move(val, row, col)}>{val}</div> 
                    }
                    
                    return <div key={`${row}${col}`} className={styles.white} onClick={() => this.move(val, row, col)}>{val}</div>
                }
            }))
        })

        console.log("rendering")
        return (
            <div>
                {chessboard}
            </div>
            
        )
    }
}

export default ChessBoard
