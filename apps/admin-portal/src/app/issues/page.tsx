"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  MessageSquare,
  CheckCircle2,
  ThumbsUp,
  User,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import "leaflet/dist/leaflet.css";

// Import the shared Issue type and constants from your new central file
import { Issue, categories, departments } from "@/types";

// Mock data now uses the imported Issue type
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
    description: "A large pothole has formed on the main road near the city park entrance. It's causing traffic delays and is a potential hazard for vehicles.",
    department: "Public Works",
    statusUpdates: [
      { status: "Reported", by: "Ravi Kumar", timestamp: "2024-01-15 10:30 AM" },
      { status: "Under Review", by: "Admin User", timestamp: "2024-01-15 02:15 PM" },
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
    description: "The street light on the corner of 5th and Elm has been out for three days.",
    department: "Electrical",
    statusUpdates: [{ status: "Reported", by: "WhatsApp Bot", timestamp: "2024-01-14 08:00 AM" }],
  },
    // ... more issues
];

const MapWithNoSSR = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function IssuesPage() {
  const [activeIssue, setActiveIssue] = React.useState<Issue | null>(issuesData[0]);

  const stats = {
    total: issuesData.length,
    open: issuesData.filter((i) => i.status === "Open").length,
    inProgress: issuesData.filter((i) => i.status === "In Progress").length,
    resolved: issuesData.filter((i) => i.status === "Resolved").length,
  };

  // This handler function explicitly uses the imported Issue type, resolving the error
  const handleMarkerClick = (issue: Issue) => {
    setActiveIssue(issue);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Live Issue Map</h1>
        <p className="text-muted-foreground">
          Real-time view of all reported issues across the city
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <Card>
            <CardContent className="p-2 h-[600px]">
              <MapWithNoSSR issues={issuesData} onMarkerClick={handleMarkerClick} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Map Legend</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-6 py-10">
              <div>
                <h3 className="mb-2 font-semibold">Priority Levels</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2"><span className="h-4 w-4 rounded-full bg-red-500"></span><span className="text-sm">High Priority</span></div>
                  <div className="flex items-center gap-2"><span className="h-4 w-4 rounded-full bg-yellow-500"></span><span className="text-sm">Medium Priority</span></div>
                  <div className="flex items-center gap-2"><span className="h-4 w-4 rounded-full bg-green-500"></span><span className="text-sm">Low Priority</span></div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Statistics</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between"><span>Total Issues:</span> <span>{stats.total}</span></div>
                  <div className="flex justify-between"><span>Open:</span> <span>{stats.open}</span></div>
                  <div className="flex justify-between"><span>In Progress:</span> <span>{stats.inProgress}</span></div>
                  <div className="flex justify-between"><span>Resolved:</span> <span>{stats.resolved}</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="lg:col-span-1">
          {activeIssue ? (
            <>
              <CardHeader>
                <CardTitle>Issue Details</CardTitle>
                <CardDescription>{activeIssue.id} - Reported on {activeIssue.creationTimestamp}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><User className="h-4 w-4" /> Reported by: <strong>{activeIssue.reporter.name}</strong></div>
                  <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4" /> Upvotes: <strong>{activeIssue.upvotes}</strong></div>
                </div>
                <div>
                  <Label>Photo</Label>
                  <div className="mt-1 flex h-32 items-center justify-center rounded-md border-2 border-dashed bg-gray-50"><img src={activeIssue.photoUrl} alt="Issue" className="h-full w-full object-cover" /></div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" readOnly value={activeIssue.description} className="mt-1 min-h-[100px]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Badge variant="outline" className="text-xs border-purple-500 text-purple-500">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Auto-Detected
                    </Badge>
                  </div>
                   <p className="text-xs text-muted-foreground mb-1">
                    AI-suggested category. Override if incorrect.
                  </p>
                  <Select value={activeIssue.category} onValueChange={() => {}}>
                    <SelectTrigger id="category"><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Badge variant="outline" className="text-xs border-purple-500 text-purple-500">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Auto-Detected
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    AI-suggested priority. Override if incorrect.
                  </p>
                  <Select value={activeIssue.priority} onValueChange={() => {}}>
                    <SelectTrigger id="priority"><SelectValue placeholder="Select priority" /></SelectTrigger>
                    <SelectContent><SelectItem value="High">High</SelectItem><SelectItem value="Medium">Medium</SelectItem><SelectItem value="Low">Low</SelectItem></SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select value={activeIssue.department} onValueChange={() => {}}>
                    <SelectTrigger id="department"><SelectValue placeholder="Assign to department" /></SelectTrigger>
                    <SelectContent>
                      {departments.map(dep => <SelectItem key={dep} value={dep}>{dep}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Status Updates</Label>
                  <div className="mt-2 space-y-2 rounded-md border p-2 h-24 overflow-y-auto">
                    {activeIssue.statusUpdates.map((update, index) => (
                      <div key={index} className="text-xs">
                        <p className="font-semibold">{update.status}</p>
                        <p className="text-muted-foreground">by {update.by} on {update.timestamp}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <Button>Assign Task</Button>
                  <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> Add Comment</Button>
                  <Button variant="destructive"><CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Resolved</Button>
                </div>
              </CardContent>
            </>
          ) : (
            <div className="flex h-full items-center justify-center"><p className="text-muted-foreground">Select an issue on the map to see details.</p></div>
          )}
        </Card>
      </div>
    </div>
  );
}

