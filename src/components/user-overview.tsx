import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usersSample } from "@/lib/sample-data";

export default function UsersOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Users Overview</CardTitle>
        <CardDescription>Active fantasy cricket managers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 w-full">
          {usersSample.map((user) => (
            <div key={user.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.username}`}
                />
                <AvatarFallback>
                  {user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.username}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user.team_name}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                ₹{user.budget_remaining} Cr
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
