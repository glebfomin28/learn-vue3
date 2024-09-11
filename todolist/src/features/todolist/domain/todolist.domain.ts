export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export enum FilterEnum {
  ALL = "all",
  DONE = "done",
  ACTIVE = "active",
}
