import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link to="/contact">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
}