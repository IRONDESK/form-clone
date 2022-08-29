export interface IPollDataInfo {
  pollId?: string;
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
