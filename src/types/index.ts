export interface IPost {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  categories: string;
  createdAt: Date;
  content: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  role: string;
}

export interface IRecentPost extends IPost {
  user: IUser;
}

export interface IPagination {
  currentPage: number;
  totalPage: number;
  onPageChange?: (page: number) => void;
}
