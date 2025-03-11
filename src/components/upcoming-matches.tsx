"use client";
import { Badge } from "@/components/ui/badge";
import { useData } from "@/lib/data-context";

export default function UpcomingMatches() {
  const { matches } = useData();

  const upcomingMatches = matches
    .filter((match) => match.status === "scheduled")
    .slice(0, 2);

  return (
    <div className="space-y-4">
      {upcomingMatches.map((match) => (
        <div key={match.id} className="flex items-center gap-3 py-1">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="font-medium text-sm truncate">
                {match.team1} vs {match.team2}
              </div>
              <Badge variant="outline" className="ml-2 text-xs">
                {new Date(match.match_date).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {match.venue}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
