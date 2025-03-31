import React from "react";

const MenuDropDown = ({titulo, times, aoAlterar, valor}) => {
    //console.log(props)

   // console.log(aoAlterar)

    const aoSelecionar = (evento) => {
        aoAlterar(evento.target.value)
        //console.log(evento.target.value)
    }


    return (
      
      <div className="menu-drop-down">
                <label>{titulo}</label>
                <select onChange={aoSelecionar} value={valor}>
                    
                    {times.map( time => <option key={time}>{time}</option>)}

                   


                </select>

        </div>
    )

}

export default MenuDropDown;