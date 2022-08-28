export interface IPollDataInfo {
  title: string;
  explain?: string;
  items: [
    {
      question: string;
      type: string;
      option: [];
      isDefault: boolean;
      hasEtc: boolean;
    }
  ];
}
