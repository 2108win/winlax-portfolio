export interface resProjects {
  projects: Project[];
  total: number;
}

export interface Project {
  title: string;
  slug: string;
  time: Date;
  description: any;
  heroImage: Image;
  information: {
    _key: string;
    informationTitle: string;
    informationType: "string" | "url";
    informationDescription?: string;
    informationUrl?: {
      url: string;
      title: string;
    };
  }[];
  projectImages: Image[];
  technologies: string[];
  slugs: string[];
  totalProjects: number;
  _createdAt: Date;
}

export interface Image {
  _id: string;
  url: string;
  nameImage: string;
  _updatedAt: Date;
}
