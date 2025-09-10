// --- Predefined lists for categories and departments for consistency ---
export const categories = ["Roads", "Sanitation", "Electrical", "Water Supply", "Public Parks"];
export const departments = ["Public Works", "Sanitation", "Electrical", "Water Department"];

// --- Define and export the shared Issue type ---
export type Issue = {
  id: string;
  position: [number, number];
  title: string;
  category: typeof categories[number];
  status: "Open" | "In Progress" | "Resolved";
  priority: "High" | "Medium" | "Low";
  photoUrl: string;
  description: string;
  department: typeof departments[number];
  upvotes: number;
  reporter: {
    name: string;
    type: "Citizen" | "Bot";
  };
  creationTimestamp: string;
  statusUpdates: {
    status: string;
    by: string;
    timestamp: string;
  }[];
};
