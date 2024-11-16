export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "admin" | "editor" | "reader";
  bio: string;
  profile_picture: string;
};
