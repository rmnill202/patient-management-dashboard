import { Button } from "@/components/ui/button";
import { Patient } from "@/types/Patient.types";

const ExpandedPatientDetails = ({patient}: {patient: Patient}): JSX.Element => {
  return (<div className="p-2 flex justify-left gap-1 align-middle min-h-[200px] w-full bg-slate-100">
    <Button>Edit Addresses</Button>
    <Button>Add New Form</Button>
    <span>Forms, addresses, expanded patient data would fit here</span>
  </div>)
}

export default ExpandedPatientDetails;
