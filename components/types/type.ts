export type FormValuesType = {
  from_name: string;
  company: string;
  email: string;
  position?: string;
  message?: string;
};

export type ProjectType = {
  name: string;
  gitHubLink: string;
  livePageLink: string;
  description: string;
  technologies: string[];
  type: string;
  id: number;
};