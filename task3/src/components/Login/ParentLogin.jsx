import { InputLogin } from './InputLogin'
import { ButtonLogin } from './ButtonLogin'

export const ParentLogin = () => {

  return (
    <form>
      <label>Username</label>
      <InputLogin />
      <label>Password</label>
      <InputLogin />
      <ButtonLogin />
    </form>
  )
}