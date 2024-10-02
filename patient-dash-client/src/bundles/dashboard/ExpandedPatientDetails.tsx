import { Patient } from "@/types/Patient.types";

const ExpandedPatientDetails = ({patient}: {patient: Patient}): JSX.Element => {
  return (<div className="p-2 flex justify-center align-middle min-h-[200px] w-full bg-slate-100">
    <h5>Expanded patient details here!</h5>
  </div>)
}

export default ExpandedPatientDetails;
