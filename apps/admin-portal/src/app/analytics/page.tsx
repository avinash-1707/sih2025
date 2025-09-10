"use client";

import * as React from "react";
import { 
  Bar, 
  BarChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  AreaChart,
  Area,
  LineChart,
  Line,
  ReferenceLine
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy, Star, ArrowUp, ArrowDown, TrendingUp, Clock, Target, CheckCircle, AlertTriangle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// --- Mock Data for Analytics ---
const brokerPerformanceData = [
  { name: "Rajesh Kumar", issuesResolved: 28, avgRating: 4.8, responseTime: "24h" },
  { name: "Priya Sharma", issuesResolved: 22, avgRating: 4.5, responseTime: "36h" },
  { name: "Mohammad Ali", issuesResolved: 15, avgRating: 4.2, responseTime: "48h" },
  { name: "Anita Patel", issuesResolved: 35, avgRating: 4.9, responseTime: "18h" },
];

const weeklyTrendsData = [
    { week: "Week 1", reports: 30, resolutions: 24 },
    { week: "Week 2", reports: 32, resolutions: 28 },
    { week: "Week 3", reports: 28, resolutions: 26 },
    { week: "Week 4", reports: 38, resolutions: 35 },
];

const responseTimeData = [
    { month: "Jan", time: 4.2 },
    { month: "Feb", time: 4.1 },
    { month: "Mar", time: 3.8 },
    { month: "Apr", time: 4.1 },
    { month: "May", time: 3.9 },
    { month: "Jun", time: 3.6 },
];

const sortedBrokers = [...brokerPerformanceData].sort((a, b) => b.issuesResolved - a.issuesResolved);
const topPerformer = sortedBrokers[0];

// --- Main Page Component ---
export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive insights into civic issue reporting and resolution patterns.
        </p>
      </div>

      {/* KPI Cards Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
                {/* Changed icon color */}
                <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">87.3%</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowUp className="h-3 w-3 text-green-500" /> +2.1% from last month
                </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                {/* Changed icon color */}
                <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">3.6 hrs</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowDown className="h-3 w-3 text-red-500" /> -0.4 hrs from target
                </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Citizen Satisfaction</CardTitle>
                {/* Changed icon color */}
                <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">4.6/5.0</div>
                 <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowUp className="h-3 w-3 text-green-500" /> +0.2 from last month
                </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
                {/* Changed icon color */}
                <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">87</div>
                 <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-yellow-500" /> +5 from yesterday
                </p>
            </CardContent>
        </Card>
      </div>

      {/* Gamification Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Top Performer
            </CardTitle>
            <CardDescription>This month's most valuable contributor.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 text-center">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-3xl">{topPerformer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold">{topPerformer.name}</h3>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold">{topPerformer.issuesResolved}</p>
                <p className="text-xs text-muted-foreground">Issues Resolved</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold flex items-center justify-center gap-1">
                  {topPerformer.avgRating}
                  <Star className="h-5 w-5 text-yellow-400" />
                </p>
                <p className="text-xs text-muted-foreground">Avg. Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Broker Performance Leaderboard</CardTitle>
            <CardDescription>Ranking based on issues resolved and ratings.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Issues Resolved</TableHead>
                  <TableHead className="text-right">Avg. Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedBrokers.map((broker, index) => (
                    <TableRow key={broker.name}>
                      <TableCell className="font-bold">#{index + 1}</TableCell>
                      <TableCell>{broker.name}</TableCell>
                      <TableCell className="text-right">{broker.issuesResolved}</TableCell>
                      <TableCell className="text-right flex justify-end items-center gap-1">
                        {broker.avgRating.toFixed(1)} <Star className="h-4 w-4 text-yellow-400" />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      {/* Trend Charts Section */}
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
            <CardDescription>Reports vs resolutions over the past month.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyTrendsData}>
                <XAxis dataKey="week" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="reports" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
                <Area type="monotone" dataKey="resolutions" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <CardTitle>Response Time Trends</CardTitle>
            <CardDescription>Average response time vs target goal.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={responseTimeData}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis domain={[0, 8]} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="time" name="Avg Time (hrs)" stroke="#3b82f6" />
                    <ReferenceLine y={4} label="Target" stroke="red" strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

