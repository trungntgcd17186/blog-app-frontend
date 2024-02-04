export interface IPost {
  id: number;
  title: string;
  date: string;
  img: string;
}

export interface ILabel {
  id: number;
  name: string;
  color: string;
}

export interface IRecentPost extends IPost {
  description: string;
  label: ILabel[];
  createdBy: {
    name: string;
    avatar: string;
  };
}
