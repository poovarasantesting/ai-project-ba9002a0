import { Toaster } from "sonner";
import { ContactForm } from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
      <Toaster position="top-center" />
    </div>
  );
}