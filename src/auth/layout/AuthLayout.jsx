
import '../../main.scss';
export const AuthLayout = ({children,title}) => {
  return (
    <section className="auth-layout-container d-flex d-flex-align-center">
      {children}
    </section>
  )
}
