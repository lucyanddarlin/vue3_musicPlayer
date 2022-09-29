export interface CountryData {
  label: string;
  countryList: Array<country>;
}

export interface country {
  zh: string;
  en: string;
  locale: string;
  code: string;
}
