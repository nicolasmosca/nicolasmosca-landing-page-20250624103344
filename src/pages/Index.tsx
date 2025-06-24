import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Brand Logo */}
      <Logo />

      <p className="mt-6 max-w-xl text-center text-lg text-muted-foreground">
        Start building something extraordinary.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Docs
        </Button>
      </div>
    </div>
  );
};

export default Index;
