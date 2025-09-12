import { Issue } from "@/types";

const sampleIssues: Issue[] = [
  {
    id: "issue_1",
    userId: "user_123",
    title: "Pothole on Maple Street",
    description:
      "Large pothole near bus stop causing traffic and potential accidents.",
    image: "",
    location: "Sector 21, Gurgaon",
    latitude: 28.4595,
    longitude: 77.0266,
    status: "Pending",
    severity: "High",
    category: "Roads",
    upvotes: 12,
    date: new Date().toISOString(),
  },
  {
    id: "issue_2",
    userId: "user_456",
    title: "Overflowing Trash Bin",
    description:
      "Garbage overflow near the park entrance, attracting stray animals.",
    image: "",
    location: "Block C, Sector 14",
    latitude: 28.4602,
    longitude: 77.03,
    status: "In Progress",
    severity: "Medium",
    category: "Sanitation",
    upvotes: 8,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "issue_3",
    userId: "user_789",
    title: "Street Light Not Working",
    description:
      "The street light near the community center has been out for 2 weeks.",
    image: "",
    location: "Near Community Center, Sector 9",
    latitude: 28.455,
    longitude: 77.02,
    status: "Resolved",
    severity: "Low",
    category: "Utilities",
    upvotes: 20,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
];

export default sampleIssues;
