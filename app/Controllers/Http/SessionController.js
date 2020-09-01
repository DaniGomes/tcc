'use strict'
const User = use('App/Models/User')

class SessionController {
  async create ({ request, auth }) {
    const { email, password } = request.all()
    try {
      const token = await auth.attempt(email, password)

      const user = await User.findByOrFail({ email })

      await user.load('aluno')
      await user.load('professor')

      token.user = user
      if (user.toJSON().aluno) {
        token.aluno = true
        token.professor = false
      } else {
        token.professor = true
        token.aluno = false
      }
      return token
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = SessionController
