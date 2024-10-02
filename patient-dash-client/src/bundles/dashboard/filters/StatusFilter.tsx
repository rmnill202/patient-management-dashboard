import { locationAtom } from "@/atoms/DashboardAtoms";
import SearchInput from "@/components/ui/searchinput"
import { PatientStatus } from "@/types/Patient.types";
import { useAtom } from "jotai"
import { useState } from "react";

const StatusOptions = [
  { value: 'Active', label: 'Active' }, 
  { value: 'Churned', label: 'Churned' }, 
  { value: 'Inquiry', label: 'Inquiry' }, 
  { value: 'Onboarding', label: 'Onboarding' }, 
];

const StatusFilter = ():JSX.Element => {
  const [status, setStatus] = useState<string | null>(null);


  return (<SearchInput selectedEntry={status ? {
    value: status,
    label: status,
  } : null} 
    setValue={(newValue) => setStatus(newValue)} 
    entries={StatusOptions} 
    label={'Patient Status'}/>);
}

export default StatusFilter;
