"use client";
import React, { Fragment } from "react";
import UpcomingMatches from "@/components/upcoming-matches";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import UsersOverview from "./user-overview";
import PlayersOverview from "./players-overview";
import PointsOverview from "./points-overview";

const Overview = () => {
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Platform Overview
          </CardTitle>
          <CardDescription>
            Current status of GullyGuru fantasy cricket platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users-overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="users-overview">Users</TabsTrigger>
              <TabsTrigger value="players-overview">Player</TabsTrigger>
              <TabsTrigger value="points-overview">Points</TabsTrigger>
            </TabsList>
            <TabsContent value="users-overview">
              <UsersOverview />
            </TabsContent>
            <TabsContent value="players-overview">
              <PlayersOverview />
            </TabsContent>
            <TabsContent value="points-overview">
              <PointsOverview />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Game Status</CardTitle>
            <CardDescription>Current phase and upcoming events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Next phase in 2 days</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View Schedule
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">My Team</CardTitle>
            <CardDescription>Your current squad and points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Players</span>
                <span className="text-sm">14/18</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Budget Remaining</span>
                <span className="text-sm">₹24.5 Cr</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Points</span>
                <span className="text-sm">342</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              Manage Squad
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Upcoming Matches
            </CardTitle>
            <CardDescription>Next IPL fixtures</CardDescription>
          </CardHeader>
          <CardContent>
            <UpcomingMatches />
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              View All Matches
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Fragment>
  );
};

export default Overview;
