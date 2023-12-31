import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

const ResetPassword = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const password = watch("create_password")
  const confirm_password = watch("confirm_password")
  const activation_code = watch("activation_code")
  const allValues = watch()

  let active = false

  if (Object.keys(allValues).length === 0) {
    active = ""
  } else {
    active = Object.values(allValues).every(
      (value) => value !== undefined && value !== ""
    )
      ? "active"
      : ""
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Create Password</h1>
        <div className="inputs">
          <div className="input-field">
            <input
              type="email"
              className="input"
              placeholder="Email *"
              {...register("email", { required: true })}
            />
            <span className="input-border"></span>
          </div>
          {errors.email && (
            <span className="error-msg">*This field is required</span>
          )}
          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="Activation code *"
              {...register("activation_code", { required: true })}
            />
            <span className="input-border"></span>
          </div>
          {errors.activation_code && (
            <span className="error-msg">*This field is required</span>
          )}
          <span style={{ alignSelf: "flex-end" }}>
            <Link className="link">Resend Activation Code</Link>
          </span>
          <div className="input-field">
            <input
              type="password"
              className="input"
              placeholder="Create New Password *"
              {...register("create_password", { required: true })}
            />
            <span className="input-border"></span>
          </div>
          {errors.create_password && (
            <span className="error-msg">*This field is required</span>
          )}
          <div className="input-field">
            <input
              type="password"
              className="input"
              placeholder="Confirm New Password *"
              {...register("confirm_password", { required: true })}
            />
            <span className="input-border"></span>
          </div>
          {errors.confirm_password && (
            <span className="error-msg">*This field is required</span>
          )}

          <button
            type="submit"
            className={`btn ${active}`}
            onClick={() => {
              if (password !== confirm_password) {
                toast.error("Password did not match")
              } else if (password.length < 6) {
                toast.error("Password must be atleast 6 characters long")
              } else if (
                password === confirm_password &&
                activation_code !== ""
              ) {
                toast.success("Password changed successfully")
                //navigate("/login")
              } else {
                toast.error("Please fill all the fields")
              }
            }}
          >
            Create Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
