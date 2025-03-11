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
import { ScrollArea } from "@/components/ui/scroll-area";
import { pointsSample } from "@/lib/sample-data";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

export default function PointsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Points Overview</CardTitle>
        <CardDescription>
          Fantasy points earned by players in matches
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] md:h-[250px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Total Points</TableHead>
                <TableHead className="text-center">Runs</TableHead>
                <TableHead className="text-center">Wickets</TableHead>
                <TableHead className="text-center">↑↓</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pointsSample.map((points, i) => (
                <TableRow key={points.id}>
                  <TableCell className="text-center">{points.points}</TableCell>
                  <TableCell className="text-center">
                    {points.runs_scored}
                  </TableCell>
                  <TableCell className="text-center">
                    {points.wickets_taken}
                  </TableCell>
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
                          <Minus key="2" className="h-4 w-4 text-gray-500" />,
                        ][i % points.batting_points]
                      }
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
