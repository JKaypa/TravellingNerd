import { useParams } from "react-router-dom"



export default function BlogDetail() {
  const {id} = useParams()
  return (
    <>
    <div>BlogDetail</div>
    <div>ID: {id}</div>
    
    </>
  )
}
