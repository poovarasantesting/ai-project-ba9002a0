import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ThumbsUp, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function HomePage() {
  const { toast } = useToast();
  const [likeCount, setLikeCount] = useState(0);
  
  const handleLike = () => {
    setLikeCount(prev => prev + 1);
    toast({
      title: "Thanks for your like!",
      description: "Your feedback is appreciated.",
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Simple UI Project</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          A clean, modern interface built with React and Tailwind CSS.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature Card 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Modern Design
            </CardTitle>
            <CardDescription>Clean and responsive interfaces</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Utilizing the latest design principles for a great user experience on any device.</p>
            <Badge variant="outline" className="mr-2">Responsive</Badge>
            <Badge variant="outline">Accessible</Badge>
          </CardContent>
        </Card>

        {/* Feature Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-blue-500" />
              Easy to Use
            </CardTitle>
            <CardDescription>Intuitive interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Designed with simplicity in mind, making it easy for users to navigate and interact.</p>
            <div className="flex justify-center">
              <Button onClick={handleLike} variant="outline" className="flex items-center gap-2">
                <Heart className={`h-4 w-4 ${likeCount > 0 ? "fill-red-500 text-red-500" : ""}`} />
                Like {likeCount > 0 && `(${likeCount})`}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-green-500" />
              User Focused
            </CardTitle>
            <CardDescription>Built for real people</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Every element is designed with the end user in mind, creating delightful experiences.</p>
            <div className="flex justify-center">
              <Button variant="default">Get Started</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>© 2025 Simple UI Project. Built with React, Tailwind CSS and shadcn/ui.</p>
      </footer>
    </div>
  );
}