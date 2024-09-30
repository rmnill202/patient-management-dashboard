import PatientCard from "../../components/PatientCard";
import { Patient } from "../../types/Patient.types";

const PatientsDisplay = ({patients}: {patients: Patient[]}):JSX.Element => {
  return (<>
    <div>Placeholder Patient Data Display</div>
    {patients.map((patient: Patient) => {
      return <PatientCard patient={patient}/>
    })}
  </>);
}

export default PatientsDisplay;