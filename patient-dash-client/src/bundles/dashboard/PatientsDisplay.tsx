import PatientCard from "../../components/PatientCard";
import { Patient } from "../../types/Patient.types";

import {
  CollapseTableRow,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CollapsibleTrigger, Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ageFromDate } from "@/util/DateUtils";
import { Card } from "@/components/ui/card";
import StatusBadge from "@/components/StatusBadge";
import ExpandedPatientDetails from "./ExpandedPatientDetails";


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

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
  // return (<>
  //   <div>Placeholder Patient Data Display</div>
  //   {patients.map((patient: Patient) => {
  //     return <PatientCard patient={patient}/>
  //   })}
  // </>);

  return (<Card className="p-2 m-2">
    <Table>
      {/* <TableCaption>{patients.length} results</TableCaption> */}
      <PatientsTableHeader/>
      <TableBody>
        {patients.map((patient: Patient) => (
          <CollapseTableRow key={patient.id}>
            <TableCell className="font-medium">{`${patient.firstName} ${patient.middleName ? patient.middleName + ' ' : ''} ${patient.lastName}`}</TableCell>
            {/* <TableCell>{patient.dateOfBirth.slice(0, 10)}</TableCell> */}
            {/* <TableCell>{new Intl.DateTimeFormat('en-US').format(new Date(patient.dateOfBirth))}</TableCell> */}
            <TableCell>{ageFromDate(new Date(patient.dateOfBirth.slice(0, 10)))}</TableCell>
            <TableCell>Patient location</TableCell>
            <TableCell><StatusBadge status={patient.currentStatus}></StatusBadge></TableCell>
            <ExpandedPatientDetails patient={patient}/>
          </CollapseTableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table></Card>
  );
}

export default PatientsDisplay;
