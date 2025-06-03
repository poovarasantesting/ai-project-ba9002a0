import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log("Login with:", email, password);
      toast({
        title: "Login attempted",
        description: "This is a demo. In a real app, you would be logged in now.",
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    
    // Simulate Google OAuth process
    setTimeout(() => {
      console.log("Google login initiated");
      toast({
        title: "Google Authentication",
        description: "This is a demo. In a real app, Google OAuth would be triggered.",
      });
      setIsGoogleLoading(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="px-0 font-normal h-auto" type="button">
                  Forgot password?
                </Button>
              </div>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In with Email"
              )}
            </Button>
          </form>

          <div className="flex items-center space-x-2">
            <Separator className="flex-1" />
            <span className="text-xs text-gray-400">OR</span>
            <Separator className="flex-1" />
          </div>

          <Button 
            variant="outline" 
            type="button" 
            className="w-full"
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </>
            )}
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <Button variant="link" className="px-0 font-normal h-auto">
              Sign up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}