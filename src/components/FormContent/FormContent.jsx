import React from 'react'
import style from './formcontent.module.css'
import { Link, useLocation} from 'react-router-dom'

const FormContent = (props) => {


    const page=props.page;
    

    

    
  return (
    <div className={style.content}>

    <h1>{page==='signup'? 'Sign Up':'Login'}</h1>

    <form 
    >

      {page==='signup' && <input placeholder='enter name' type="text" name="name" />}
      <input placeholder='enter email' type="email" name="email" />

      <input placeholder='enter password' type="password" name="password"  />

      <button className={style.btn}>Submit</button>
    </form>

    <div className={style.loginText}>
      <p>{page==='signup' ?'Already ' :`Don't `}have an account ? </p>
      <Link className={style.lgnBtn} to={page==='signup'?'/login':'/signup'}>{page==='signup'?'Login':'SignUp'}</Link>
    </div>
  </div>

  )
}

export default FormContent