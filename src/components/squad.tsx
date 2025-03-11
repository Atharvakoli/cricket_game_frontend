import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SquadStats from "@/components/squad-stats";
import PlayerCard from "@/components/player-card";
import { Save } from "lucide-react";

export default function Squad() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">My Squad</h1>
          <p className="text-muted-foreground">
            Manage your team and set playing XI
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <SquadStats />
      </div>

      <Tabs defaultValue="all-players" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all-players">All Players</TabsTrigger>
          <TabsTrigger value="playing-xi">Playing XI</TabsTrigger>
          <TabsTrigger value="bench">Bench</TabsTrigger>
        </TabsList>

        <TabsContent value="all-players">
          <Card>
            <CardHeader>
              <CardTitle>All Players (14/18)</CardTitle>
              <CardDescription>Your complete squad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 14 }).map((_, i) => (
                  <PlayerCard
                    key={i}
                    name={`Player ${i + 1}`}
                    team={["CSK", "MI", "RCB", "KKR", "DC"][i % 5]}
                    role={
                      ["Batsman", "Bowler", "All-rounder", "Wicket-keeper"][
                        i % 4
                      ]
                    }
                    price={`${(i + 1) * 0.5} Cr`}
                    points={i * 12 + 50}
                    inPlayingXI={i < 11}
                    isCaptain={i === 0}
                    isViceCaptain={i === 1}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="playing-xi">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Playing XI</CardTitle>
                <CardDescription>
                  Select your playing XI for the next match
                </CardDescription>
              </div>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save XI
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Role</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                    <TableHead className="text-right">Captain</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Badge variant="outline" className="font-normal">
                          {["BAT", "BWL", "AR", "WK"][i % 4]}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        Player {i + 1}
                      </TableCell>
                      <TableCell>
                        {["CSK", "MI", "RCB", "KKR", "DC"][i % 5]}
                      </TableCell>
                      <TableCell className="text-right">
                        {i * 12 + 50}
                      </TableCell>
                      <TableCell className="text-right">
                        {i === 0 ? (
                          <Badge className="bg-orange-500 hover:bg-orange-500">
                            C
                          </Badge>
                        ) : i === 1 ? (
                          <Badge
                            variant="outline"
                            className="border-orange-500 text-orange-500"
                          >
                            VC
                          </Badge>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bench">
          <Card>
            <CardHeader>
              <CardTitle>Bench (3 Players)</CardTitle>
              <CardDescription>Players not in your playing XI</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">Role</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Badge variant="outline" className="font-normal">
                          {["BAT", "BWL", "AR"][i % 3]}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        Player {i + 12}
                      </TableCell>
                      <TableCell>{["CSK", "MI", "RCB"][i % 3]}</TableCell>
                      <TableCell className="text-right">{i * 8 + 30}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Add to XI
                        </Button>
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
