import { useForm } from "react-hook-form"
import "../styles.css"
import { Link } from "react-router-dom"

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required"
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters"
    }

    return true
  }

  const email = watch("email")
  const password = watch("password")

  const active =
    email !== undefined &&
    email !== "" &&
    password !== undefined &&
    password !== ""
      ? "active"
      : ""

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="title">Login</h1>
        <div className="inputs">
          <div className="input-field">
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <span className="input-border"></span>
          </div>
          {errors.email && (
            <span className="error-msg">*Email is required</span>
          )}
          <div className="input-field">
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                validate: validatePassword,
              })}
            />
            <span className="input-border"></span>
          </div>
          {errors.password && (
            <span className="error-msg">*{errors.password.message}</span>
          )}
          <div className="forgot-password">
            <Link to="/forgot-password" className="link">
              <span>Forgot Password?</span>
            </Link>
          </div>

          <button type="submit" className={`btn ${active}`}>
            Login
          </button>

          <div className="signup-link">
            <span>Dont have an account? </span>
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
