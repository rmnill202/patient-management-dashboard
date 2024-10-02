import { Patient } from "../../types/Patient.types";

import {
  CollapseTableRow,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ageFromDate } from "@/util/DateUtils";
import { Card } from "@/components/ui/card";
import StatusBadge from "@/components/StatusBadge";
import ExpandedPatientDetails from "./ExpandedPatientDetails";

const PatientsTableHeader = ():JSX.Element => {
  return (
  <TableHeader>
    <TableRow>
      <TableHead className="w-[300px]">Name</TableHead>
      <TableHead>Age</TableHead>
      <TableHead>Location</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  );
};

const PatientsDisplay = ({patients}: {patients: Patient[]}):JSX.Element => {
  return (<Card className="p-2 m-2">
    <Table>
      <PatientsTableHeader/>
      <TableBody>
        {patients.map((patient: Patient) => (
          <CollapseTableRow key={patient.id}>
            <TableCell className="font-medium">{`${patient.firstName} ${patient.middleName ? patient.middleName + ' ' : ''} ${patient.lastName}`}</TableCell>
            <TableCell>{ageFromDate(new Date(patient.dateOfBirth.slice(0, 10)))}</TableCell>
            <TableCell>{patient.addresses?.length >= 1 ? patient.addresses[0].city : 'No Address on Record'}</TableCell>
            <TableCell><StatusBadge status={patient.currentStatus}></StatusBadge></TableCell>
            <ExpandedPatientDetails patient={patient}/>
          </CollapseTableRow>
        ))}
      </TableBody>
    </Table></Card>
  );
}

export default PatientsDisplay;
