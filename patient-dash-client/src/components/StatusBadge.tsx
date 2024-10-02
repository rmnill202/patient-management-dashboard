import { PatientStatus } from "@/types/Patient.types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const StatusBadge = ({status}: {status?: PatientStatus}):JSX.Element => {

  return (<div>{status || 'Unknown'}</div>)
  // Consider moving to an in-UI edit option
  // return (<Select
  //   value={`${status}`}
  //   onValueChange={(value) => {
  //     // TODO set patient status
  //   }}
  // >
  //   <SelectTrigger className="h-8 w-[70px]">
  //     <SelectValue placeholder={`${perPage}`} />
  //   </SelectTrigger>
  //   <SelectContent side="top">
  //     {[/* TODO Status Enum */].map((pageSize) => (
  //       <SelectItem key={pageSize} value={`${pageSize}`}>
  //         {pageSize}
  //       </SelectItem>
  //     ))}
  //   </SelectContent>
  // </Select>);
}

export default StatusBadge;
