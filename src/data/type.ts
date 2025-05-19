export type JobDesc = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  taskDesc: JobTaskDesc[];
};
export type JobTaskDesc = { headTask: string; subTask: string[] };

export type ProjectDesc = {
  company: string;
  projectName: string;
  startDate: string;
  endDate: string;
  skillStacks: string[];
  devEnvrionment: string[];
  taskDesc: ProjectSubTaskDesc[];
};
export type ProjectSubTaskDesc = { headTask: string; mainPoint: string; subTask: string[] };
