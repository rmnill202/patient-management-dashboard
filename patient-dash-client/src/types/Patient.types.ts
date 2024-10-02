type Address = {
  id: string;
  streetAddress: string;
  secondaryStreet?: string;
  city: string;
  state: USState;
  zip: number
}

type Patient = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  currentStatus?: PatientStatus;
  statusHistory: PatientStatus[];
  statusHistoryDates: Date[];
  addresses: Address[];
  forms: unknown;
}

enum PatientStatus {
  Inquiry,
  Onboarding,
  Active,
  Churned,
}


enum USState {
  AL,
  AK,
  AR,
  AZ,
  CA,
  CO,
  CT,
  DC,
  DE,
  FL,
  GA,
  HI,
  IA,
  ID,
  IL,
  IN,
  KS,
  KY,
  LA,
  MA,
  MD,
  ME,
  MI,
  MN,
  MO,
  MS,
  MT,
  NC,
  ND,
  NE,
  NH,
  NJ,
  NM,
  NV,
  NY,
  OK,
  OH,
  OR,
  PA,
  RI,
  SC,
  SD,
  TN,
  TX,
  UT,
  VA,
  VT,
  WA,
  WI,
  WV,
  WY,
}


export type {
  Patient,
  PatientStatus,
};