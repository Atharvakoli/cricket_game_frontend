import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { playersSample } from "@/lib/sample-data";

export default function PlayersOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Players Overview</CardTitle>
        <CardDescription>Top IPL players available</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {playersSample.map((player) => (
            <div key={player.id} className="flex items-center space-x-4">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {player.name}
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{player.team}</Badge>
                  <Badge variant="secondary">{player.role}</Badge>
                </div>
              </div>
              <div className="text-sm">Base: ₹{player.base_price} Cr</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
