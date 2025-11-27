import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";


import { Button } from "@/components/ui/button";

export function HomePageInfoDialog() {
  const [open, setOpen] = useState(true); // open by default on homepage

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent  aria-describedby="home-dialog-description" className="w-[90%] md:w-full max-w-lg mx-4 sm:mx-auto">
        <DialogHeader>
          <DialogTitle>Nice to Know</DialogTitle>
            <ul aria-describedby="" className="list-disc ml-5 space-y-2 mt-2 text-gray-700">
              <li>You can <strong>view sender, subject, and date</strong> only. No modifications are allowed.</li>
              <li>Browse your Gmail from <strong>oldest to newest</strong> without manually scrolling.</li>
              <li>We <strong>don’t store any of your data</strong>.</li>
              <li>Each page shows up to <strong>500 emails</strong>, displaying <strong>30 at a time</strong>. Pagination is at the bottom.</li>
            </ul>
            <div className="mt-4 font-semibold text-gray-800">
              Thank you for using BackwordGmail!
            </div>
        </DialogHeader>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button>Got it</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
