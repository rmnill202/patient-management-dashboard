import useGetPatients from "../../hooks/useGetPatients"
import Filters from "./Filters"
import Pagination from "./Pagination"
import PatientsDisplay from "./PatientsDisplay"
import Search from "./Search"

const Dashboard = ():JSX.Element => {

  const { isPending, data } = useGetPatients()


  return (<>
    <div>Data results {data ? JSON.stringify(data) : 'None'}</div>
    <Search/>
    <Filters/>
    <PatientsDisplay/>
    <Pagination/>
    </>)
}

export default Dashboard;