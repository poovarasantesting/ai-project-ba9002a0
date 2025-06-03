import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <div className="min-h-screen bg-background">
        <HomePage />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;