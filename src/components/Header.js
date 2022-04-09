import React from 'react'
import { ContainerHeader } from '../styles/StyleHeader'

const Header = () => {
    return (
        <ContainerHeader>
            <h1>TODO</h1>
            <div>
            <input type='radio' name='check'></input>
            <label>create a new todo</label>
            </div>
        </ContainerHeader>
    )
}

export default Header