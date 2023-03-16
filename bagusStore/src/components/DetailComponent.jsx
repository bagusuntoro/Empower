import { useNavigate } from "react-router-dom"
import { Button } from "antd"

const DetailComponent = () => {
    const navigate = useNavigate()
    return(
        <>
            <h1>Detail Component</h1>
            <Button type="primary" 
                danger
                onClick={()=>navigate('/')}
            >
                Back
            </Button>
        </>
    )
}

export default DetailComponent