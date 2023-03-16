import { useNavigate } from "react-router-dom"
import CardComponent from "./CardComponent"
import { Button } from "antd"

const ListComponent = ()=>{
    const navigate = useNavigate()
    return(
        <>
            <h1>List Component</h1>
            <CardComponent/>
            <Button type="primary" 
                style={{ background: "orange" }}
                onClick={()=>navigate('/detail')}
            >
                Detail
            </Button>
            <Button type="primary"
                onClick={()=>navigate('/belanja')}
            >
                Beli
            </Button>
        </>
    )
}

export default ListComponent