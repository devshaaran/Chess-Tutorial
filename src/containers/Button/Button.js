import React, { Component } from 'react'
import styles from './Button.module.css'

export class Button extends Component {

    state = {
        clicked : false
    }

    afterClick = () => {
        this.setState({clicked: true})
        alert("Iam clicked");
    }

    render() {
        return (
            <div className={styles.Button} style={{backgroundColor: this.props.button_color}} onClick={this.afterClick}>
                <p className={styles.ButtonText}>Chess Rocks</p>
            </div>
        )
    }
}

export default Button
