import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Clock, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import AuctionTimer from "@/components/auction-timer";
import BidHistory from "@/components/bid-history";

export default function Auction() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Round 1 Auction</h1>
          <p className="text-muted-foreground">Bid on contested players</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Player
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Virat Kohli</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="bg-blue-100 text-blue-800 hover:bg-blue-100"
              >
                BAT
              </Badge>
              <span className="text-sm text-muted-foreground">RCB</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Bid</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12.5 Cr</div>
            <p className="text-xs text-muted-foreground">Base Price: ₹8.0 Cr</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Time Remaining
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <AuctionTimer seconds={15} />
            <p className="text-xs text-muted-foreground">
              Bid expires in 15 seconds
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Auction</CardTitle>
              <CardDescription>
                Place your bids via Telegram. Use /bid command followed by the
                amount.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-2">Player Stats</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Batting Avg
                        </span>
                        <span>48.3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Strike Rate
                        </span>
                        <span>137.8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Matches</span>
                        <span>223</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Runs</span>
                        <span>6624</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">50s/100s</span>
                        <span>44/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Last Season
                        </span>
                        <span>639 runs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-2">Bid History</h3>
                  <BidHistory />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Your Budget: <span className="font-medium">₹24.5 Cr</span>
              </div>
              <Link href="/telegram">
                <Button disabled>Place Bid via Telegram</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Auction Queue</CardTitle>
              <CardDescription>Upcoming players</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                    <div className="flex-shrink-0 w-6 text-center font-medium">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {
                          [
                            "Rohit Sharma",
                            "Jasprit Bumrah",
                            "KL Rahul",
                            "Rishabh Pant",
                            "Hardik Pandya",
                          ][i]
                        }
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs font-normal"
                        >
                          {["BAT", "BWL", "BAT", "WK", "AR"][i]}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {["MI", "MI", "LSG", "DC", "GT"][i]}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      ₹{[7.0, 8.5, 6.0, 5.5, 7.5][i]} Cr
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Auction Results</CardTitle>
          <CardDescription>Players already auctioned</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Player</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Base Price</TableHead>
                <TableHead>Sold For</TableHead>
                <TableHead className="text-right">Winning Manager</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {
                      [
                        "MS Dhoni",
                        "Ravindra Jadeja",
                        "Suryakumar Yadav",
                        "Yuzvendra Chahal",
                        "Jos Buttler",
                      ][i]
                    }
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {["WK", "AR", "BAT", "BWL", "WK"][i]}
                    </Badge>
                  </TableCell>
                  <TableCell>{["CSK", "CSK", "MI", "RR", "RR"][i]}</TableCell>
                  <TableCell>₹{[7.0, 6.0, 6.5, 5.0, 7.5][i]} Cr</TableCell>
                  <TableCell>₹{[10.2, 8.4, 9.6, 7.2, 11.8][i]} Cr</TableCell>
                  <TableCell className="text-right">
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
