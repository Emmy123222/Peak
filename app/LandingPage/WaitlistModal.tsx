import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Invalid email", {
        description: "Please enter a valid email address",
      });
      return;
    }

    console.log("Email submitted:", email);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setEmail("");
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-[425px] rounded-5xl p-0 overflow-hidden"
        // This line assumes DialogContent supports hiding internal close
      >
        <div className="relative bg-white rounded-5xl shadow-lg">
          {/* Custom Close Button */}
          {/* <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 border border-gray-200"
            aria-label="Close"
          >
          
          </button> */}

          {!isSubmitted ? (
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-2xl">
                  <Mail className="h-8 w-8 text-purple-700" />
                </div>
              </div>

              <DialogTitle className="text-center text-2xl font-semibold mb-2">
                Join Waitlist
              </DialogTitle>

              <DialogDescription className="text-center mb-6 text-gray-500">
                Join 1,500 others on the waitlist
              </DialogDescription>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <img
                        src="/icons/Letter.png"
                        alt="Email Icon"
                        className="h-5 w-5"
                      />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-full"
                >
                  Join
                </Button>
              </form>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full relative">
                  <img src="/icons/success.png" alt="Success" />
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 -right-2 h-2 w-2 bg-red-400 rounded-full"></div>
                    <div className="absolute -top-3 left-0 h-2 w-2 bg-yellow-400 rounded-full"></div>
                    <div className="absolute bottom-1 -left-3 h-2 w-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute -bottom-2 right-1 h-2 w-2 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <DialogTitle className="text-center text-2xl font-semibold mb-2">
                Congratulations!
              </DialogTitle>

              <DialogDescription className="text-center mb-6 text-gray-500">
                You have just been added to our waitlist.
              </DialogDescription>

              <Button
                onClick={handleClose}
                className="w-full py-6 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-full"
              >
                Okay
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
