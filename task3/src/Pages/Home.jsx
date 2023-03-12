import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Table } from 'antd'

// components
import { TopNavigation } from '../components/header/TopNavigation'


export const Home = () => {
  const navigate = useNavigate()
  const [kuis, setKuis] = useState([])

  const getKuis = async () => {
    try {
      let response = await axios.get('https://opentdb.com/api.php?amount=7')
      setKuis(response.data.results)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getKuis();
  }, [])

  const columns = [
    {
      title: 'Quiz Question',
      dataIndex: 'question',
      key: 'question',
    },
  ];

  return (
    <>
      <TopNavigation />
      <div className="App">
        <div className="template">
          <h2>HOMEPAGE</h2>
          <Table dataSource={kuis} columns={columns} />
        </div>
      </div>
    </>
  )
}
