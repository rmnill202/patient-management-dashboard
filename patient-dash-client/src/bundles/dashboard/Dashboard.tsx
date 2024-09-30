import useGetPatients from "../../hooks/useGetPatients"
import Filters from "./Filters"
import Pagination from "./Pagination"
import PatientsDisplay from "./PatientsDisplay"
import Search from "./Search"

const Dashboard = ():JSX.Element => {
  const { isPending, data } = useGetPatients();

  // TODO - Remove once components have support for loading data types
  if(!data) {
    return <div>Loading...</div>
  }

  return (<>
    <div className="flex">
      <Search/>
      <Filters/>
    </div>
    <PatientsDisplay patients={data?.results || []}/>
    <Pagination currentPage={data.currentPage} finalPage={data.finalPage}/>
    </>)
}

export default Dashboard;