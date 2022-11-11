import React from "react";
import { Formik,Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from "axios";
import './App.css';
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";


const handleClickCadastro =(values) =>{Axios.post("http://localhost:3001/register",{
    name: values.name,
    email: values.email,
    user: values.user,
    cpf:values.cpf,
  }).then((response)=>{
    console.log(response);
  });
};



const validationCadastro = yup.object().shape({
  name:yup.string().required("Este campo e obrigatorio"),
  email:yup.string().email("Nao e um E-mail").required("Este campo e obrigatorio"),
  user:yup.string().required("Este campo e obrigatorio"),
  cpf:yup.string().min(11,"CPF incoreto" ).required("Este campo e obrigatorio"),
});


export const Registration= () => {
  return (
        <div className="container">
      <div className="h1"><h1>B2List</h1></div>
      <div className="h2"><h1>Usuários</h1></div>
  
        <Formik initialValues={{}}
        onSubmit= {handleClickCadastro}
        validationSchema={validationCadastro}>
          <Form className="cadastro-form">
            <div className="cadastro-form-group">

        
              <div className="cadastro-form-name">
                <Field name="name" className="form-field" placeHolder="Nome*"/>
                <ErrorMessage component="span" name="name" className="form-error"/>
              </div>  

              <div className="cadastro-form-email">
              <Field name="email" className="form-field" placeHolder="E-mail*"/>
                <ErrorMessage component="span" name="email" className="form-error"/>
              </div>

              <div className="cadastro-form-user">
              <Field name="user" className="form-field" placeHolder="Usuario*"/>
                <ErrorMessage component="span" name="user" className="form-error"/>
              </div>

              <div className="cadastro-form-CPF">
                <Field name="cpf" className="form-field" placeHolder="CPF*"/>
                <ErrorMessage component="span" name="cpf" className="form-error"/>
              </div>
              


            </div>
            <div className="cadastro-button">
            <Link to={ROUTES.HOME}><button className='button'>Cancelar</button></Link>
              <button className='buttonsave'>Salvar</button>
              </div>              
                </Form>   
              </Formik>

      </div>
      )};