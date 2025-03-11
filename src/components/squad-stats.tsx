"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Award, Percent } from "lucide-react";
import { useData } from "@/lib/data-context";

export default function SquadStats() {
  const { currentUser, userSquads, players } = useData();

  if (!currentUser) {
    return null;
  }

  const userSquadPlayers = userSquads.filter(
    (squad) => squad.user_id === currentUser.id
  );
  const squadSize = userSquadPlayers.length;
  const budgetRemaining = currentUser.budget_remaining;

  // Calculate team balance
  const roles = userSquadPlayers.map((squad) => {
    const player = players.find((p) => p.id === squad.player_id);
    return player ? player.role : "";
  });
  const batsmen = roles.filter((role) => role === "Batsman").length;
  const bowlers = roles.filter((role) => role === "Bowler").length;
  const allRounders = roles.filter((role) => role === "All-rounder").length;
  const wicketKeepers = roles.filter((role) => role === "Wicket-keeper").length;

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Squad Size</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{squadSize}/18</div>
          <p className="text-xs text-muted-foreground">
            {18 - squadSize} slots available
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Budget Remaining
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₹{budgetRemaining.toFixed(1)} Cr
          </div>
          <p className="text-xs text-muted-foreground">of ₹100 Cr total</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Highest Scorer</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">N/A</div>
          <p className="text-xs text-muted-foreground">
            No match data available
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Balance</CardTitle>
          <Percent className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {batsmen + bowlers + allRounders + wicketKeepers === squadSize
              ? "Balanced"
              : "Unbalanced"}
          </div>
          <p className="text-xs text-muted-foreground">
            {batsmen} BAT, {bowlers} BWL, {allRounders} AR, {wicketKeepers} WK
          </p>
        </CardContent>
      </Card>
    </>
  );
}
