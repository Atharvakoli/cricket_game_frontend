import { Avatar } from "@/components/ui/avatar";
import { ArrowUp, ArrowDown, Minus, Trophy } from "lucide-react";
import Image from "next/image";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Leaderboard() {
  const leaders = [
    {
      id: 1,
      name: "Rohit Sharma",
      points: 487,
      change: "up",
      team: "Mumbai Mavericks",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Virat Kohli",
      points: 462,
      change: "down",
      team: "Bangalore Bulls",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "MS Dhoni",
      points: 458,
      change: "same",
      team: "Chennai Kings",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "KL Rahul",
      points: 445,
      change: "up",
      team: "Punjab Warriors",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Rishabh Pant",
      points: 432,
      change: "down",
      team: "Delhi Capitals",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">
            Season standings and statistics
          </p>
        </div>
      </div>

      <Tabs defaultValue="overall" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="match-day">Match Day</TabsTrigger>
        </TabsList>
        <TabsContent value="overall">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Season Leaderboard</CardTitle>
                  <CardDescription>
                    Cumulative points for the entire season
                  </CardDescription>
                </div>
                <div className="flex gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Managers</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="top10">Top 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Rank</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Team Name</TableHead>
                    <TableHead className="text-center">Change</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaders &&
                    leaders.map((leader, i) => (
                      <TableRow
                        key={i}
                        className={i === 6 ? "bg-muted/50" : ""}
                      >
                        <TableCell className="font-medium">{i + 1}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <Image
                                src={`${leader.avatar}`}
                                alt={`Manager ${i + 1}`}
                                width={32}
                                height={32}
                              />
                            </Avatar>
                            <div>
                              {leader.name}
                              {/* {i === 6 && (
                              <Badge className="ml-2 bg-primary">You</Badge>
                            )} */}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{leader.team}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center">
                            {
                              [
                                <ArrowUp
                                  key="0"
                                  className="h-4 w-4 text-green-500"
                                />,
                                <ArrowDown
                                  key="1"
                                  className="h-4 w-4 text-red-500"
                                />,
                                <Minus
                                  key="2"
                                  className="h-4 w-4 text-gray-500"
                                />,
                              ][i % 3]
                            }
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {leader.points - i * 12}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Top Scorer
                </CardTitle>
                <CardDescription>Manager with highest points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mt-2">
                  <Avatar className="h-12 w-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Top Scorer"
                      width={10}
                      height={10}
                    />
                  </Avatar>
                  <div>
                    <div className="font-medium">Rohit Sharma</div>
                    <div className="text-sm text-muted-foreground">
                      Mumbai Mavericks
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">487 points</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Your Stats
                </CardTitle>
                <CardDescription>Your performance this season</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current Rank</span>
                    <span className="text-sm">7th</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Points</span>
                    <span className="text-sm">342</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Best Rank</span>
                    <span className="text-sm">4th (Week 2)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Points Behind Leader
                    </span>
                    <span className="text-sm">145</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Top Performers
                </CardTitle>
                <CardDescription>Highest scoring players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 text-center font-medium">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                          {["Virat Kohli", "Jos Buttler", "Jasprit Bumrah"][i]}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="text-xs font-normal"
                          >
                            {["BAT", "WK", "BWL"][i]}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {["RCB", "RR", "MI"][i]}
                          </span>
                        </div>
                      </div>
                      <div className="font-medium">{[245, 232, 218][i]}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weekly">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Weekly Leaderboard</CardTitle>
                  <CardDescription>
                    Points earned in the current week
                  </CardDescription>
                </div>
                <div className="flex gap-4">
                  <Select defaultValue="current">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Week" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Week</SelectItem>
                      <SelectItem value="week3">Week 3</SelectItem>
                      <SelectItem value="week2">Week 2</SelectItem>
                      <SelectItem value="week1">Week 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Rank</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Team Name</TableHead>
                    <TableHead className="text-right">Weekly Points</TableHead>
                    <TableHead className="text-right">Overall Rank</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i} className={i === 2 ? "bg-muted/50" : ""}>
                      <TableCell className="font-medium">{i + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <Image
                              src={`/placeholder.svg?height=32&width=32`}
                              alt={`Manager ${i + 1}`}
                              width={10}
                              height={10}
                            />
                          </Avatar>
                          <div>
                            {
                              [
                                "KL Rahul",
                                "Rishabh Pant",
                                "Your Name",
                                "Rohit Sharma",
                                "Virat Kohli",
                              ][i]
                            }
                            {i === 2 && (
                              <Badge className="ml-2 bg-primary">You</Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {
                          [
                            "Punjab Warriors",
                            "Delhi Capitals",
                            "Your Team Name",
                            "Mumbai Mavericks",
                            "Bangalore Bulls",
                          ][i]
                        }
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {98 - i * 8}
                      </TableCell>
                      <TableCell className="text-right">
                        {[4, 5, 7, 1, 2][i]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="match-day">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle>Match Day Leaderboard</CardTitle>
                  <CardDescription>
                    Points earned in the latest match day
                  </CardDescription>
                </div>
                <div className="flex gap-4">
                  <Select defaultValue="latest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Match Day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Latest (CSK vs MI)</SelectItem>
                      <SelectItem value="day11">Day 11 (RCB vs KKR)</SelectItem>
                      <SelectItem value="day10">Day 10 (DC vs PBKS)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Rank</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Team Name</TableHead>
                    <TableHead>Top Performer</TableHead>
                    <TableHead className="text-right">Match Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i} className={i === 4 ? "bg-muted/50" : ""}>
                      <TableCell className="font-medium">{i + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <Image
                              src={`/placeholder.svg?height=32&width=32`}
                              alt={`Manager ${i + 1}`}
                              width={10}
                              height={10}
                            />
                          </Avatar>
                          <div>
                            {
                              [
                                "MS Dhoni",
                                "Hardik Pandya",
                                "Jasprit Bumrah",
                                "Ravindra Jadeja",
                                "Your Name",
                              ][i]
                            }
                            {i === 4 && (
                              <Badge className="ml-2 bg-primary">You</Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {
                          [
                            "Chennai Kings",
                            "Gujarat Titans",
                            "Mumbai Indians",
                            "Chennai Super Kings",
                            "Your Team Name",
                          ][i]
                        }
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {
                            [
                              "Rohit Sharma",
                              "Suryakumar Yadav",
                              "Jasprit Bumrah",
                              "MS Dhoni",
                              "Ravindra Jadeja",
                            ][i]
                          }
                          <Badge
                            variant="outline"
                            className="text-xs font-normal"
                          >
                            {[42, 38, 35, 32, 28][i]} pts
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {76 - i * 6}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
