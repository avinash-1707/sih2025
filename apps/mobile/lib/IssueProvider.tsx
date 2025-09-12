import React, { createContext, useContext, useState, ReactNode } from "react";
import { Issue, User } from "@/types";
import sampleIssues from "./sampleData";

type IssuesContextType = {
  issues: Issue[];
  addIssue: (issue: Omit<Issue, "id" | "date" | "userId">) => void;
  currentUser: User;
  getCurrentLocation: () => Promise<{
    latitude: number;
    longitude: number;
    address: string;
  }>;
};

const IssuesContext = createContext<IssuesContextType | undefined>(undefined);

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<Issue[]>(sampleIssues);

  const currentUser: User = {
    id: "user_123",
    name: "Aisha Khan",
    email: "aisha.khan@example.com",
    phone: "+1 555 123 4567",
    points: 125,
  };

  const addIssue = (issue: Omit<Issue, "id" | "date" | "userId">) => {
    const newIssue: Issue = {
      id: `issue_${Date.now()}`,
      userId: currentUser.id,
      date: new Date().toISOString(),
      ...issue,
    };
    setIssues((prev) => [newIssue, ...prev]);
  };

  const getCurrentLocation = async () => {
    // Mocked location for prototype. In a real app use expo-location.
    return {
      latitude: 28.4595,
      longitude: 77.0266,
      address: "Sector 21, Gurgaon",
    };
  };

  return (
    <IssuesContext.Provider
      value={{ issues, addIssue, currentUser, getCurrentLocation }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export const useIssues = () => {
  const ctx = useContext(IssuesContext);
  if (!ctx) throw new Error("useIssues must be used within IssuesProvider");
  return ctx;
};
