import React from 'react';

class Menu  extends React.Component{
    render(){
        return (
            <div>
                <p>&#9776;</p>
                {this.props.estacoes.map(estacao => {
                    return (
                        <p>{estacao}</p>
                    )
                })}
            </div>
        )
    }
}

export default Menu;