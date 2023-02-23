import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Icons } from "./Icons";

export function Header() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <header className="h-28 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-x-20">
        <div className="font-semibold text-3xl tracking-wide">
          <Link to="/">Rides</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-x-10">
            <li className="text-neutral-300 hover:text-neutral-50 transition-colors font-medium">
              <HashLink smooth to="/#features">
                Features
              </HashLink>
            </li>
            <li className="text-neutral-300 hover:text-neutral-50 transition-colors font-medium">
              <Link to="/vehicles">Fleet</Link>
            </li>
            <li className="text-neutral-300 hover:text-neutral-50 transition-colors font-medium">
              <HashLink smooth to="/#faqs">
                FAQs
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="hidden md:flex flex-row gap-x-10">
        <li>
          <button className="text-neutral-300 hover:text-neutral-50 transition-colors font-medium">
            Log In
          </button>
        </li>
        <li>
          <button className="text-neutral-300 hover:text-neutral-50 transition-colors font-medium">
            Sign Up
          </button>
        </li>
      </ul>
      <div className="md:hidden">
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
          <DialogTrigger className="visible md:hidden px-2 py-[2px] pr-0 text-neutral-300 hover:text-neutral-50 transition-colors rounded-md group">
            <Icons.MoreOptions className="h-7 w-7 fill-current align-middle" />
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 visible md:invisible bg-black/80 w-screen h-full z-30 backdrop-blur-sm">
              <DialogContent className="absolute top-7 right-[5%] visible md:invisible flex flex-col gap-6 w-full max-w-[90%] bg-neutral-800 rounded-lg shadow-lg p-6 z-40">
                <DialogClose className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center ">
                  <Icons.Close className="h-7 w-7 fill-current stroke-current align-middle text-neutral-300 hover:text-white transition-colors" />
                </DialogClose>
                <DialogTitle asChild>
                  <p className="pt-2 tracking-wide font-mono text-teal-400">
                    Navigation
                  </p>
                </DialogTitle>
                <ul className="flex flex-col justify-center gap-y-4 my-4">
                  <li className="py-2 font-semibold text-2xl text-neutral-300 hover:text-neutral-50 transition-colors">
                    <DialogClose asChild>
                      <Link to="/">Home</Link>
                    </DialogClose>
                  </li>
                  <li className="py-2 font-semibold text-2xl text-neutral-300 hover:text-neutral-50 transition-colors">
                    <DialogClose asChild>
                      <Link to="/vehicles">Fleet</Link>
                    </DialogClose>
                  </li>
                </ul>
                <div className="border-t border-neutral-700 my-4">
                  <div className="flex flex-row items-center justify-between gap-x-5 mt-3">
                    <button className="text-left py-2 font-semibold text-neutral-300 hover:text-neutral-50 transition-colors">
                      Download the App
                    </button>

                    <div className="flex flex-row items-center gap-x-[10px] shrink-0">
                      <button className="py-2 font-semibold text-neutral-300 hover:text-neutral-50 transition-colors">
                        Log In
                      </button>
                      <span className="text-sm text-neutral-700">|</span>
                      <button className="py-2 font-semibold text-neutral-300 hover:text-neutral-50 transition-colors">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </DialogOverlay>
          </DialogPortal>
        </Dialog>
      </div>
    </header>
  );
}
