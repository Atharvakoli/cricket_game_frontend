import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Clock, DollarSign, Filter, Search } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TransfersPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-4" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Transfer Market</h1>
          <p className="text-muted-foreground">
            Buy and sell players during transfer windows
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Transfer Window
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Closed</div>
            <p className="text-xs text-muted-foreground">
              Opens in 5 days (Saturday)
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹24.5 Cr</div>
            <p className="text-xs text-muted-foreground">Free Bids: 4/4</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Listings</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">No active listings</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="market" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="my-listings">My Listings</TabsTrigger>
          <TabsTrigger value="my-bids">My Bids</TabsTrigger>
        </TabsList>

        <TabsContent value="market">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Market</CardTitle>
              <CardDescription>Players available for transfer</CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search players..." className="pl-8" />
                </div>
                <div className="flex gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="bat">Batsman</SelectItem>
                      <SelectItem value="bwl">Bowler</SelectItem>
                      <SelectItem value="ar">All-rounder</SelectItem>
                      <SelectItem value="wk">Wicket-keeper</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Team" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Teams</SelectItem>
                      <SelectItem value="csk">CSK</SelectItem>
                      <SelectItem value="mi">MI</SelectItem>
                      <SelectItem value="rcb">RCB</SelectItem>
                      <SelectItem value="kkr">KKR</SelectItem>
                      <SelectItem value="dc">DC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    Transfer Window Closed
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The next transfer window opens in 5 days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-listings">
          <Card>
            <CardHeader>
              <CardTitle>My Listings</CardTitle>
              <CardDescription>
                Players you`&apos;`ve listed for transfer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    You don`&apos;`t have any active listings
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-bids">
          <Card>
            <CardHeader>
              <CardTitle>My Bids</CardTitle>
              <CardDescription>Your active bids on players</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    You don`&apos;`t have any active bids
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transfers</CardTitle>
          <CardDescription>
            Completed transfers from the last window
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Sold By</TableHead>
                <TableHead>Bought By</TableHead>
                <TableHead className="text-right">Transfer Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {
                      [
                        "Shikhar Dhawan",
                        "Kagiso Rabada",
                        "Glenn Maxwell",
                        "Shreyas Iyer",
                        "Quinton de Kock",
                      ][i]
                    }
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {["BAT", "BWL", "AR", "BAT", "WK"][i]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {["PBKS", "PBKS", "RCB", "KKR", "LSG"][i]}
                  </TableCell>
                  <TableCell>
                    {
                      [
                        "Rohit Sharma",
                        "Virat Kohli",
                        "MS Dhoni",
                        "KL Rahul",
                        "Rishabh Pant",
                      ][i]
                    }
                  </TableCell>
                  <TableCell>
                    {
                      [
                        "Virat Kohli",
                        "MS Dhoni",
                        "KL Rahul",
                        "Rishabh Pant",
                        "Rohit Sharma",
                      ][i]
                    }
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{[5.2, 6.4, 7.6, 4.8, 8.2][i]} Cr
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
