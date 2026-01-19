export enum InfoCardVariant {
  Default = "default",
  Minimal = "minimal"
}

export type InfoCardType = {
  icon: string;
  description: string;
  title?: string;
  variant?: InfoCardVariant;
};
