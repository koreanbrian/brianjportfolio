export type JobDesc = { company: string; position: string; startDate: string; endDate: string; taskDesc: TaskDesc[] };
export type TaskDesc = { headTask: string; subTask: string[] };
