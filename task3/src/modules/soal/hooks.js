import { useEffect, useState } from "react";

import { questionsAmount } from "./fetcher";

export const useQuestionsAmount = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    questionsAmount(10).then(data => {
      setIsLoading(false)
      setData(data)
    })
      .catch(error => {
        setIsLoading(false)
        setError(error)
      })
  }, [])

  return {
    data,
    isLoading,
    error
  }
}