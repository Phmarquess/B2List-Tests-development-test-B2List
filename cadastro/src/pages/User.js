import React from 'react';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import Axios from "axios";
import './App.css';
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";


const handleClickBuscar =(values) =>{Axios.post("http://localhost:3001/cadastro",{
    name: values.name,
    email: values.email,
    user: values.user,
    cpf:values.cpf,
  }).then((response)=>{
    console.log(response);
  });
};








export const Home = () => {
  return (
    <div className="container">
  <div className="h1"><h1>B2List</h1></div>
  <div className="h2"><h1>Usuários</h1></div>

    <Formik initialValues={{}}
    onSubmit= {handleClickBuscar}>
      
      <Form className="pesquisa-form">
          
        <div className="cadastro-button">
          </div> 
        <div className="pesquisa-form-group">    
          <div className="form-pesquisa">
            <Field name="pesquisar" className="form-field-pesquisa" placeHolder="Pesquisar"/>
            <ErrorMessage component="span" name="name" className="form-error-pesquisa"/>
            <button className='buttonPesquisa'>Buscar</button>       
            <Link to={ROUTES.REGISTRATION}><button className='buttonCadastro'>Cadastro Usuario</button></Link>
              
          </div>
        </div>
        <div class="table">
          <table class="sample">
            <tr>
              <th>Usuario</th>
              <th>Nome</th>
              <th>Acões</th>
            </tr>
            <tr>
                <td>Ted</td>
                <td>22</td>
                <td>Estudante</td>
            </tr>
            <tr>
                <td>Ralf</td>
                <td>26</td>
                <td>Designer</td>
            </tr>
          </table>
        </div>   

        <div class="page">
              Paginas
        </div>
            </Form>   
          </Formik>

  </div>
  )};