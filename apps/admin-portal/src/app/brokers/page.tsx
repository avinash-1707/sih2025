"use client";

import * as React from "react";
import {
  Users,
  CheckCircle2,
  Clock,
  XCircle,
  Search,
  Filter,
  Eye,
  FilePenLine,
  Trash2,
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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// More detailed mock data to match the new design
const brokerApplicationsData = [
  {
    name: "Rajesh Kumar",
    age: 34,
    qualification: "Civil Engineering Diploma",
    specialization: "Road Construction",
    kycStatus: "verified",
    approvalStatus: "approved",
    submitted: "1/15/2024",
  },
  {
    name: "Priya Sharma",
    age: 29,
    qualification: "B.Tech Civil Engineering",
    specialization: "Water Management",
    kycStatus: "verified",
    approvalStatus: "pending",
    submitted: "1/20/2024",
  },
  {
    name: "Mohammad Ali",
    age: 42,
    qualification: "ITI Electrical",
    specialization: "Street Lighting",
    kycStatus: "pending",
    approvalStatus: "pending",
    submitted: "1/22/2024",
  },
  {
    name: "Anita Patel",
    age: 31,
    qualification: "Diploma in Public Health",
    specialization: "Waste Management",
    kycStatus: "verified",
    approvalStatus: "rejected",
    submitted: "1/10/2024",
  },
];

// Custom styles for status badges for better visual distinction
const statusStyles = {
  verified: "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400",
  pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400",
  approved: "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400",
  rejected: "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400",
};


export default function BrokerManagementPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Broker Management</h1>
        <p className="text-muted-foreground">
          Manage and approve contractor applications
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
      </div>

      {/* Broker Applications Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Broker Applications</CardTitle>
              <CardDescription>
                Review and manage contractor applications.
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search brokers..." className="pl-8" />
              </div>
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Qualification</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>KYC Status</TableHead>
                <TableHead>Approval Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {brokerApplicationsData.map((app) => (
                <TableRow key={app.name}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell>{app.age}</TableCell>
                  <TableCell>{app.qualification}</TableCell>
                  <TableCell>{app.specialization}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusStyles[app.kycStatus as keyof typeof statusStyles]}>
                      {app.kycStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={statusStyles[app.approvalStatus as keyof typeof statusStyles]}>
                      {app.approvalStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{app.submitted}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FilePenLine className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}