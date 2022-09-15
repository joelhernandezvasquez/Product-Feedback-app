import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
   <AuthLayout>
    <div className="auth-container">
     <h1>Login</h1>

      <form>
       <label className="d-block" for="email" id="emailInput" aria-label="email">
         <input type="email" name="email" placeholder="demo@gmail.com"/>
       </label>
       

       <label for="password">Password
          <input type="password" name="password"/>
       </label>
       
     </form>

    </div>
   </AuthLayout>
  )
}
