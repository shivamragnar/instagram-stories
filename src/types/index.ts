export interface User {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface Story {
  [username: string]: string[];
}
