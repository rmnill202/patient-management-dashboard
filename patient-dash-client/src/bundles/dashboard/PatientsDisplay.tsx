import PlaceholderCard from "../../components/PlaceholderCard";
import { Patient } from "../../types/Patient.types";

const PatientsDisplay = ({patients}: {patients: Patient[]}):JSX.Element => {
  return (<>
    <div>Placeholder Patient Data Display</div>
    {patients.map((patient: Patient) => {
      return <PlaceholderCard patient={patient}/>
    })}
  </>);
}

export default PatientsDisplay;