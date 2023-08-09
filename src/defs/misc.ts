export type IEntry = {
  API: string;
  Category: string;
  Description: string;
  Link: string;
};

export type IForm = {
  onChangeValue: (name: string, val: string) => void;
  onSubmit: () => void;
};
