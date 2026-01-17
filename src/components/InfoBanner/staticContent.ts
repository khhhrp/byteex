export type InfoCardType = {
  icon: string;
  size: string;
  title: string;
  description: string;
};

export const infoCards: InfoCardType[] = [
  {
    icon: "co2",
    size: "30",
    title: "3,927 kg",
    description: "of CO2 saved"
  },
  {
    icon: "h2o",
    size: "30",
    title: "2,546,167 days",
    description: "of drinking water saved"
  },
  {
    icon: "lightning",
    size: "30",
    title: "7,321 kWh",
    description: "of energy saved"
  }
];
