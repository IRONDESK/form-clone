export interface IPollDataInfo {
  pollId?: string;
  title: string;
  explain?: string;
  items: [
    {
      question: string;
      type: string;
      option: string[];
      isDefault: boolean;
      hasEtc: boolean;
    }
  ];
}
