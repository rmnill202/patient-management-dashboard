import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../constants/environment";
import { Patient } from "../types/Patient.types";

const useCreatePatient = () => {
  const {mutate: createPatient, isPending, data, error, isError} = useMutation({
    mutationFn: async (newPatient: Patient) => {
      const res = await fetch(`${API_URL}/patients`, {
        method: 'POST',
        body: JSON.stringify({
          firstName: newPatient.firstName,
          lastName: newPatient.lastName,
          dateOfBirth: newPatient.dateOfBirth,
          middleName: newPatient.middleName,
        }),
      });
      return await res.json() as Patient;
    },
  });
  
  return {
    createPatient,
    isPending,
    data,
    error,
    isError
  };
}

export default useCreatePatient;