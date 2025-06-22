import { useParams } from "react-router"

function Page() {
  const { id } = useParams()
  return <div>{`${id} page`}</div>
}

export default Page
