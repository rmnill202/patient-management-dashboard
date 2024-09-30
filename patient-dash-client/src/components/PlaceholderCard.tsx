import { Patient } from "../types/Patient.types";


/**
 * A placeholder UI component that displays patient data in a card.
 * @param patient 
 */
const PlaceholderCard = ({patient}: {patient: Patient}):JSX.Element => {
  return (
  <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow mb-4">
    Patient Name: {patient.firstName}
  </div>);
};

export default PlaceholderCard;