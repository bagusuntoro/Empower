import { useNavigate } from "react-router-dom"
import { Button } from "antd"

const ShopingComponent = () => {
    const navigate = useNavigate()
    return(
        <>
            <h1>Shoping Component</h1>
            <Button type="primary" 
                danger
                onClick={()=>navigate('/')}
            >
                Back
            </Button>
        </>
    )
}

export default ShopingComponent