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
import Link from "next/link";
import Auction from "@/components/auction";
import Overview from "@/components/overview";
import Transfer from "@/components/transfer";
import Leaderboard from "@/components/leaderboard";
import Squad from "@/components/squad";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-8 p-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            GullyGuru
          </h1>
          <p className="text-muted-foreground mt-1">Fantasy Cricket Platform</p>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button asChild>
            <Link href="/telegram">
              <span className="mr-2">Connect Telegram</span>
            </Link>
          </Button>
        </div>
      </header>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview" className="text-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="auction" className="text-sm">
            Auction
          </TabsTrigger>
          <TabsTrigger value="my-squad" className="text-sm">
            My Squad
          </TabsTrigger>
          <TabsTrigger value="transfers" className="text-sm">
            Transfers
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="text-sm">
            Leaderboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 w-full">
          <Overview />
        </TabsContent>

        <TabsContent value="auction" className="space-y-6">
          <Auction />
        </TabsContent>

        <TabsContent value="my-squad">
          <Squad />
          <Card>
            <CardHeader>
              <CardTitle>My Squad</CardTitle>
              <CardDescription>
                Manage your team and set playing XI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">
                Please connect your Telegram account to view your squad
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/telegram">Connect Telegram</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="transfers">
          <Transfer />
        </TabsContent>

        <TabsContent value="leaderboard">
          <Leaderboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
