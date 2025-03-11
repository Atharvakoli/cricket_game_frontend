import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, Check, Copy } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function TelegramPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-4" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Connect with Telegram</h1>
          <p className="text-muted-foreground">
            Link your account to participate in GullyGuru
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Connect Your Account</CardTitle>
            <CardDescription>
              Follow these steps to connect with the GullyGuru Telegram bot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                  1
                </Badge>
                <h3 className="font-medium">
                  Open Telegram and search for the bot
                </h3>
              </div>
              <p className="text-sm text-muted-foreground ml-8">
                Search for <span className="font-medium">@GullyGuruBot</span> in
                Telegram
              </p>
              <div className="ml-8 flex items-center gap-2 mt-1">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  @GullyGuruBot
                </code>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Copy className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                  2
                </Badge>
                <h3 className="font-medium">Start the bot</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-8">
                Click the `&quot;`Start`&quot;` button or send{" "}
                <span className="font-medium">/start</span> command
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                  3
                </Badge>
                <h3 className="font-medium">Link your account</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-8">
                Send the following verification code to the bot:
              </p>
              <div className="ml-8 bg-muted p-3 rounded-md font-mono text-center text-lg tracking-wider">
                GG-1234-ABCD
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                  4
                </Badge>
                <h3 className="font-medium">Join the group chat</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-8">
                The bot will send you an invite link to join the GullyGuru group
                chat
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a
                href="https://t.me/GullyGuruBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Open Telegram
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Telegram Commands</CardTitle>
            <CardDescription>
              Common commands to use with the GullyGuru bot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Basic Commands</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /start
                    </code>
                    <span>Start the bot and get welcome message</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /help
                    </code>
                    <span>Get list of available commands</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /status
                    </code>
                    <span>Check current game status</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Squad Management</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /squad
                    </code>
                    <span>View your current squad</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /submit_squad
                    </code>
                    <span>Submit initial squad (Round 0)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /set_xi
                    </code>
                    <span>Set your playing XI</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Auction & Transfers</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /bid 10.5
                    </code>
                    <span>Place a bid of 10.5 Cr in auction</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /list_player
                    </code>
                    <span>List a player for transfer</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /transfer_bids
                    </code>
                    <span>View your transfer bids</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Stats & Leaderboard</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /leaderboard
                    </code>
                    <span>View current leaderboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /points
                    </code>
                    <span>View your points breakdown</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
                      /matches
                    </code>
                    <span>View upcoming matches</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4 text-green-500" />
                Commands work in both private chat and group
              </span>
            </div>
            <Button variant="outline" asChild>
              <Link href="/help">View Full Documentation</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

