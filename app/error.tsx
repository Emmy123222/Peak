"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <AlertCircle className="h-16 w-16 text-destructive" />
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="max-w-md text-muted-foreground">
        We apologize for the inconvenience. Please try again or contact support
        if the problem persists.
      </p>
      <Button onClick={reset} size="lg">
        Try Again
      </Button>
    </div>
  );
}
