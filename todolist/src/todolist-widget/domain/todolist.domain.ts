export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export enum TodoFilterEnum {
  ALL = "all",
  DONE = "done",
  ACTIVE = "active",
}
