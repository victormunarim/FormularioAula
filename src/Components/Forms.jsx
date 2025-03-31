import React from "react";
import { useState } from "react";
import InputText from "./InputText.jsx";
import MenuDropDown from "./MenuDropDown";
import NewButton from "./NewButton";


const Forms = ({ aoColaboradorCadastrado }) => {

  const items = [
    { label: 'Nome', placeholder: 'Digite seu nome' },
    { label: 'Cargo', placeholder: 'Digite seu cargo' },
    { label: 'Imagem', placeholder: 'Digite a url da sua imagem' },

  ];


  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  //cargo


  //   const aoAlterarNome = (valor) => [
  //      setNome(valor)
  //   ]

  //   const aoAlterarCargo = (valor) => [
  //    setCargo(valor)
  // ]

  // const aoAlterarImagem = (valor) => [
  //    setImagem(valor)
  // ]



  const times = [
    'Aluno',
    'Professor',
    'Coordenador',
    'Administrativo'
  ]

  const aoEnviar = (evento) => {
    evento.preventDefault();
    //console.log('O formulário foi enviado:' + nome, cargo, imagem, time)

    aoColaboradorCadastrado({ nome, cargo, imagem, time })
  }


  return (
    <section className="forms">
      <form onSubmit={aoEnviar}>

        <InputText
          label='Nome'
          placeholder='Digite seu nome'
          required={true}
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />

        <InputText
          label='Cargo'
          placeholder='Digite seu cargo'
          required={true}
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        />

        <InputText
          label="Imagem"
          placeholder='Digite o endereço da sua imagem'
          required={true}
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}
        />

        <MenuDropDown
          titulo='Time'
          times={times}
          valor={time}
          aoAlterar={valor => setTime(valor)}



        />


        <NewButton>Criar Card </NewButton>

        {/* <InputText label= 'Nome' placeholder="Digite seu nome"/>
                        <InputText label= 'Cargo' placeholder="Digite seu cargo"  />
                        <InputText label= 'Imagem' placeholder= "Digite a url da imagem"/> */}

      </form>

    </section>

  )
}

export default Forms;