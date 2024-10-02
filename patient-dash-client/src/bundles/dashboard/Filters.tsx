import StateFilter from "./filters/StateFilter";
import StatusFilter from "./filters/StatusFilter";



const Filters = ():JSX.Element => {
  return (<div className="flex">
    <StatusFilter/>
    <StateFilter/>
  </div>);
}

export default Filters;