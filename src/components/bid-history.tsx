import { Badge } from "@/components/ui/badge";

export default function BidHistory() {
  const bids = [
    {
      id: 1,
      manager: "Rohit Sharma",
      amount: "₹12.5 Cr",
      time: "15s ago",
      isHighest: true,
    },
    {
      id: 2,
      manager: "Virat Kohli",
      amount: "₹12.0 Cr",
      time: "30s ago",
      isHighest: false,
    },
    {
      id: 3,
      manager: "Rohit Sharma",
      amount: "₹11.5 Cr",
      time: "45s ago",
      isHighest: false,
    },
    {
      id: 4,
      manager: "MS Dhoni",
      amount: "₹11.0 Cr",
      time: "1m ago",
      isHighest: false,
    },
    {
      id: 5,
      manager: "Virat Kohli",
      amount: "₹10.5 Cr",
      time: "1m 15s ago",
      isHighest: false,
    },
  ];

  return (
    <div className="space-y-2">
      {bids.map((bid) => (
        <div
          key={bid.id}
          className="flex items-center justify-between py-1 border-b border-border last:border-0"
        >
          <div>
            <div className="font-medium text-sm flex items-center gap-2">
              {bid.manager}
              {bid.isHighest && (
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 hover:bg-green-100 text-xs"
                >
                  Highest
                </Badge>
              )}
            </div>
            <div className="text-xs text-muted-foreground">{bid.time}</div>
          </div>
          <div className="font-medium">{bid.amount}</div>
        </div>
      ))}
    </div>
  );
}
