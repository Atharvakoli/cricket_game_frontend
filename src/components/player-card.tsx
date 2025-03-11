import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Crown, Shield } from "lucide-react";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  team: string;
  role: string;
  price: string;
  points: number;
  inPlayingXI: boolean;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
}

export default function PlayerCard({
  name,
  team,
  role,
  price,
  points,
  inPlayingXI,
  isCaptain = false,
  isViceCaptain = false,
}: PlayerCardProps) {
  // Map roles to short codes and colors
  const roleMap: Record<string, { short: string; color: string }> = {
    Batsman: { short: "BAT", color: "bg-blue-100 text-blue-800" },
    Bowler: { short: "BWL", color: "bg-green-100 text-green-800" },
    "All-rounder": { short: "AR", color: "bg-purple-100 text-purple-800" },
    "Wicket-keeper": { short: "WK", color: "bg-red-100 text-red-800" },
  };

  const { short: roleShort, color: roleColor } = roleMap[role] || {
    short: "UNK",
    color: "bg-gray-100 text-gray-800",
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
          <Avatar className="h-16 w-16 border-2 border-background">
            <Image
              src={`/placeholder.svg?height=64&width=64`}
              width={66}
              height={66}
              alt={name}
            />
          </Avatar>
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          {isCaptain && (
            <Badge className="bg-orange-500 hover:bg-orange-500">
              <Crown className="h-3 w-3 mr-1" />C
            </Badge>
          )}
          {isViceCaptain && (
            <Badge
              variant="outline"
              className="border-orange-500 text-orange-500"
            >
              <Shield className="h-3 w-3 mr-1" />
              VC
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-sm">{name}</h3>
            <p className="text-xs text-muted-foreground">{team}</p>
          </div>
          <Badge
            variant="outline"
            className={`${roleColor} text-xs font-normal`}
          >
            {roleShort}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-muted-foreground">Price</p>
            <p className="font-medium">{price}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Points</p>
            <p className="font-medium">{points}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 bg-muted/50">
        <Button variant="ghost" size="sm" className="w-full text-xs h-8">
          {inPlayingXI ? "Remove from XI" : "Add to XI"}
        </Button>
      </CardFooter>
    </Card>
  );
}
