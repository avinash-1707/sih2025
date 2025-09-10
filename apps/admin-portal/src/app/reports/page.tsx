"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ThumbsUp, User, Send } from "lucide-react";
import { Issue, categories, departments } from "@/types";

// --- Mock Data ---
// In a real app, this data would be fetched from your database
const issuesData: Issue[] = [
    {
    id: "ISSUE-001",
    position: [23.168, 79.932],
    title: "Pothole on Main Street",
    category: "Roads",
    status: "Open",
    priority: "High",
    upvotes: 12,
    reporter: { name: "Ravi Kumar", type: "Citizen" },
    creationTimestamp: "2024-01-15 10:30 AM",
    photoUrl: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    description: "A large pothole has formed on the main road near the city park entrance.",
    department: "Public Works",
    statusUpdates: [
      { status: "Reported", by: "Ravi Kumar", timestamp: "2024-01-15 10:30 AM" },
    ],
  },
  {
    id: "ISSUE-002",
    position: [23.175, 79.945],
    title: "Street Light Outage",
    category: "Electrical",
    status: "In Progress",
    priority: "Medium",
    upvotes: 5,
    reporter: { name: "WhatsApp Bot", type: "Bot" },
    creationTimestamp: "2024-01-14 08:00 AM",
    photoUrl: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    description: "The street light on the corner of 5th and Elm is out.",
    department: "Electrical",
    statusUpdates: [{ status: "Reported", by: "WhatsApp Bot", timestamp: "2024-01-14 08:00 AM" }],
  },
   {
    id: "ISSUE-004",
    position: [23.171, 79.952],
    title: "Leaking Water Pipe",
    category: "Water Supply",
    status: "Open",
    priority: "High",
    upvotes: 25,
    reporter: { name: "Vikram Singh", type: "Citizen" },
    creationTimestamp: "2024-01-17 11:00 AM",
    photoUrl: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    description: "Major water leak on the main road in Sadar Bazaar.",
    department: "Water Department",
    statusUpdates: [{ status: "Reported", by: "Vikram Singh", timestamp: "2024-01-17 11:00 AM" }],
  },
  {
    id: "ISSUE-005",
    position: [23.155, 79.925],
    title: "Broken Park Bench",
    category: "Public Parks",
    status: "In Progress",
    priority: "Low",
    upvotes: 3,
    reporter: { name: "Telegram Bot", type: "Bot" },
    creationTimestamp: "2024-01-16 03:45 PM",
    photoUrl: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    description: "A bench near the fountain in Rani Durgavati Park is broken.",
    department: "Public Works",
    statusUpdates: [
      { status: "Reported", by: "Telegram Bot", timestamp: "2024-01-16 03:45 PM" },
    ],
  },
  {
    id: "ISSUE-006",
    position: [23.180, 79.930],
    title: "Faded Road Markings",
    category: "Roads",
    status: "Open",
    priority: "Medium",
    upvotes: 8,
    reporter: { name: "Priya Gupta", type: "Citizen" },
    creationTimestamp: "2024-01-18 09:20 AM",
    photoUrl: "https://placehold.co/600x400/e2e8f0/e2e8f0",
    description: "Lane markings are faded at the Gorakhpur crossing.",
    department: "Public Works",
    statusUpdates: [{ status: "Reported", by: "Priya Gupta", timestamp: "2024-01-18 09:20 AM" }],
  },
];

const brokers = ["Rajesh Kumar", "Priya Sharma", "Mohammad Ali", "Anita Patel"];

// --- Helper component for an individual issue card ---
const ReportCard = ({ issue, onAssignClick }: { issue: Issue; onAssignClick: () => void; }) => (
  <Card className="mb-4">
    <CardHeader className="pb-4">
      <div className="flex justify-between items-start">
        <CardTitle className="text-base font-bold">{issue.title}</CardTitle>
        <Badge variant="secondary">{issue.category}</Badge>
      </div>
      <CardDescription>{issue.id}</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
       <div className="text-sm text-muted-foreground flex justify-between">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{issue.reporter.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" />
            <span>{issue.upvotes} Upvotes</span>
          </div>
        </div>
        <Button size="sm" className="w-full" onClick={onAssignClick}>
            <Send className="mr-2 h-4 w-4" />
            Assign Report
        </Button>
    </CardContent>
  </Card>
);

// --- Helper component for the assignment dialog ---
const AssignmentDialog = ({ issue, open, onOpenChange }: { issue: Issue | null; open: boolean; onOpenChange: (open: boolean) => void; }) => {
  if (!issue) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Report: {issue.id}</DialogTitle>
          <DialogDescription>
            Assign "{issue.title}" to a department or an available broker.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="assignee" className="text-right">Assign To</Label>
                <Select>
                    <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a department or broker" />
                    </SelectTrigger>
                    <SelectContent>
                        <Label className="px-2 text-xs font-semibold text-muted-foreground">DEPARTMENTS</Label>
                        {departments.map(dep => <SelectItem key={dep} value={dep}>{dep}</SelectItem>)}
                        <Label className="px-2 text-xs font-semibold text-muted-foreground">BROKERS</Label>
                        {brokers.map(broker => <SelectItem key={broker} value={broker}>{broker}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" onClick={() => onOpenChange(false)}>Confirm Assignment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// --- Main Page Component ---
export default function ReportsPage() {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [selectedIssue, setSelectedIssue] = React.useState<Issue | null>(null);

  const handleAssignClick = (issue: Issue) => {
    setSelectedIssue(issue);
    setDialogOpen(true);
  };
  
  const activeIssues = issuesData.filter(i => i.status === "Open" || i.status === "In Progress");
  const highPriority = activeIssues.filter((issue) => issue.priority === "High");
  const mediumPriority = activeIssues.filter((issue) => issue.priority === "Medium");
  const lowPriority = activeIssues.filter((issue) => issue.priority === "Low");

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Active Reports Board</h1>
          <p className="text-muted-foreground">
            Assign active reports based on priority tiers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tier 1: High Priority */}
          <div className="flex flex-col">
            <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/20 mb-4">
              <h2 className="text-lg font-bold text-red-800 dark:text-red-400">Tier 1: High Priority</h2>
              <p className="text-sm text-red-700 dark:text-red-300">Requires government department resolution.</p>
            </div>
            {highPriority.length > 0 ? (
              highPriority.map(issue => <ReportCard key={issue.id} issue={issue} onAssignClick={() => handleAssignClick(issue)} />)
            ) : (
              <p className="text-sm text-muted-foreground text-center p-4">No high-priority reports.</p>
            )}
          </div>

          {/* Tier 2: Medium Priority */}
          <div className="flex flex-col">
            <div className="p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 mb-4">
              <h2 className="text-lg font-bold text-yellow-800 dark:text-yellow-400">Tier 2: Medium Priority</h2>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Can be assigned to brokers or departments.</p>
            </div>
            {mediumPriority.length > 0 ? (
              mediumPriority.map(issue => <ReportCard key={issue.id} issue={issue} onAssignClick={() => handleAssignClick(issue)} />)
            ) : (
              <p className="text-sm text-muted-foreground text-center p-4">No medium-priority reports.</p>
            )}
          </div>

          {/* Tier 3: Low Priority */}
          <div className="flex flex-col">
            <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/20 mb-4">
              <h2 className="text-lg font-bold text-green-800 dark:text-green-400">Tier 3: Low Priority</h2>
              <p className="text-sm text-green-700 dark:text-green-300">Ideal for assignment to brokers.</p>
            </div>
            {lowPriority.length > 0 ? (
              lowPriority.map(issue => <ReportCard key={issue.id} issue={issue} onAssignClick={() => handleAssignClick(issue)} />)
            ) : (
              <p className="text-sm text-muted-foreground text-center p-4">No low-priority reports.</p>
            )}
          </div>
        </div>
      </div>
      <AssignmentDialog issue={selectedIssue} open={isDialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}

