export type IssueStatus = "Pending" | "In Progress" | "Resolved";

export type Issue = {
  id: string;
  userId: string;
  title?: string;
  description: string;
  image?: string; // URI
  location: string;
  latitude?: number;
  longitude?: number;
  status: IssueStatus;
  severity?: "Low" | "Medium" | "High";
  category?: string;
  upvotes?: number;
  date: string; // ISO
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  points?: number;
};
