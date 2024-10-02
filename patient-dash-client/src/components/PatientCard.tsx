import { Patient } from "../types/Patient.types";


/**
 * An expandable patient data display 
 * @param patient 
 */
const PlaceholderCard = ({patient}: {patient: Patient}):JSX.Element => {
  const nameString = `${patient.firstName} ${patient.middleName ? patient.middleName + ' ' : ''} ${patient.lastName}`
  return (
  <div className="w-full p-4 border border-gray-200 rounded-lg shadow mb-4 grid grid-cols-7">
    {/* Name & Age */}
    {/* Location */}
    {/* Status */}
    {/* Expand */}
    <div className="col-span-4">
      {nameString}
    </div>
    <div>
      Address
    </div>
    <div>
      Status
    </div>
    <div>
      Expand
    </div>
  </div>);
};

export default PlaceholderCard;