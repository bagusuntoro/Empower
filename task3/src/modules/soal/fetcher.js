import { api } from '../../configs/axios'

export const questionsAmount = async (amount) => {
  const questions = await api.get('/', {
    params: {
      amount
    }
  })

  return questions.data
}