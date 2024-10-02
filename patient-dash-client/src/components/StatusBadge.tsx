import { PatientStatus } from "@/types/Patient.types";

const StatusColorMap = {
  [PatientStatus.Active]: 'bg-gray-100 text-gray-800',
  [PatientStatus.Onboarding]: 'bg-gray-100 text-gray-800',
  [PatientStatus.Churned]: 'bg-gray-100 text-gray-800',
  [PatientStatus.Inquiry]: 'bg-yellow-100 text-yellow-800',
}

const UnknownStatusColor = 'bg-gray-100 text-gray-800';

const StatusBadge = ({status}: {status?: PatientStatus}):JSX.Element => {

  return (<span className={`${status ? StatusColorMap[status] : UnknownStatusColor} text-xs font-medium me-2 px-2.5 py-0.5 rounded`}>{status || 'Unknown'}</span>)
}

export default StatusBadge;
