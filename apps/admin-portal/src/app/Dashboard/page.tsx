"use client";

import * as React from "react";
import {
  Users,
  CheckCircle2,
  Clock,
  Briefcase,
  AlertTriangle,
  ClipboardCheck,
  RadioTower,
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

// --- Mock Data ---

const recentIssuesData = [
  {
    id: "TSS-001",
    title: "Pothole on Main Street",
    time: "2 hours ago",
    priority: "high",
    status: "in-progress",
  },
  {
    id: "ISS-002",
    title: "Street light not working",
    time: "4 hours ago",
    priority: "medium",
    status: "acknowledged",
  },
  {
    id: "ISS-003",
    title: "Garbage collection delayed",
    time: "8 hours ago",
    priority: "low",
    status: "submitted",
  },
  {
    id: "TSS-004",
    title: "Water leak in pipeline",
    time: "1 day ago",
    priority: "high",
    status: "resolved",
  },
];

const systemStatusData = {
  apiResponseTime: "142ms",
  databaseStatus: "Healthy",
  activeUsers: 1247,
  serverLoad: "67%",
};

// --- Styling Helpers ---

const priorityStyles = {
  high: "bg-red-500 text-primary-foreground hover:bg-red-500/90",
  medium: "bg-yellow-500 text-primary-foreground hover:bg-yellow-500/90",
  low: "bg-gray-500 text-primary-foreground hover:bg-gray-500/90",
};

const issueStatusStyles = {
  "in-progress": "text-blue-600 bg-blue-50 border-blue-200",
  acknowledged: "text-purple-600 bg-purple-50 border-purple-200",
  submitted: "text-gray-600 bg-gray-50 border-gray-200",
  resolved: "text-green-600 bg-green-50 border-green-200",
};

// --- Main Component ---

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here’s what’s happening in your city.
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <RadioTower className="h-4 w-4" />
          Live Updates
        </Button>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Brokers</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">-12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved Brokers</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-muted-foreground">+6% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
            <Briefcase className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,147</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">282</div>
            <p className="text-xs text-muted-foreground">-3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Lower Section: Recent Issues & System Status */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Issues */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Issues</CardTitle>
            <CardDescription>
              Latest citizen reported issues requiring attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {recentIssuesData.map((issue) => (
                <div key={issue.id} className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                       <span className="text-sm font-medium">{issue.id}</span>
                       <Badge className={priorityStyles[issue.priority as keyof typeof priorityStyles]}>
                        {issue.priority}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{issue.title}</p>
                     <p className="text-xs text-muted-foreground mt-1">{issue.time}</p>
                  </div>
                  <Badge variant="outline" className={issueStatusStyles[issue.status as keyof typeof issueStatusStyles]}>
                    {issue.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Current system health and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">API Response Time</p>
                <div className="flex items-center gap-2">
                   <span className="h-2 w-2 rounded-full bg-green-500"></span>
                   <p className="text-sm font-medium">{systemStatusData.apiResponseTime}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Database Status</p>
                 <div className="flex items-center gap-2">
                   <span className="h-2 w-2 rounded-full bg-green-500"></span>
                   <p className="text-sm font-medium">{systemStatusData.databaseStatus}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-sm font-medium">{systemStatusData.activeUsers.toLocaleString()}</p>
              </div>
               <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Server Load</p>
                <p className="text-sm font-medium">{systemStatusData.serverLoad}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

