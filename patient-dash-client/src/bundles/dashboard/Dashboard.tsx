import useGetPatients from "../../hooks/useGetPatients"
import Filters from "./Filters"
import Pagination from "./Pagination"
import PatientsDisplay from "./PatientsDisplay"
import Search from "./Search"
import SearchResultMessage from "./SearchResultMessage"

const Dashboard = ():JSX.Element => {
  const { isPending, data } = useGetPatients();

  // TODO - Remove once components have support for loading data types
  if(!data) {
    return <div>Loading...</div>
  }

  return (<div className="flex-grow">
    <div className="flex p-2 gap-4 justify-between">
      <Search/>
      <Filters/>
    </div>
    <SearchResultMessage/>
    <PatientsDisplay patients={data?.results || []}/>
    <Pagination currentPage={data.currentPage} finalPage={data.finalPage}/>
    </div>);
}

export default Dashboard;