import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { WaitlistModalProps } from "../../../type/type";

const Success = ({ isOpen, onClose }: WaitlistModalProps) => {

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-[425px] rounded-5xl p-0 overflow-hidden"
        // This line assumes DialogContent supports hiding internal close
      >
        <div className="relative bg-white rounded-5xl shadow-lg">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Success;
