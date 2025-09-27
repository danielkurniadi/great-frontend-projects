import * as React from "react";
import * as Primitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "~/lib/utils";

const Dialog = Primitive.Root;

const DialogTrigger = Primitive.Trigger;

const DialogPortal = Primitive.Portal;

const DialogClose = Primitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof Primitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof Primitive.Overlay>
>(({ className, ...dialogProps }, ref) => (
  <Primitive.Overlay
    ref={ref}
    className={cn(
      "DialogOverlay",
      "fixed inset-0 z-10 bg-black/80",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className,
    )}
    {...dialogProps}
  />
));
DialogOverlay.displayName = Primitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, children, ...dialogProps }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Primitive.Content
      ref={ref}
      className={cn(
        "DialogContent",
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
        "bg-background data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
        className,
      )}
      {...dialogProps}
    >
      {children}
      <Primitive.Close
        className={cn(
          "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100",
          "ring-offset-background focus:outline-none focus:ring focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
          "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
          className,
        )}
      >
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Primitive.Close>
    </Primitive.Content>
  </DialogPortal>
));
DialogContent.displayName = Primitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof Primitive.Title>,
  React.ComponentPropsWithoutRef<typeof Primitive.Title>
>(({ className, ...props }, ref) => (
  <Primitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = Primitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof Primitive.Description>,
  React.ComponentPropsWithoutRef<typeof Primitive.Description>
>(({ className, ...props }, ref) => (
  <Primitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
DialogDescription.displayName = Primitive.Description.displayName;

const DialogDemo = () => (
  <Primitive.Root>
    <Primitive.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Primitive.Trigger>
    <Primitive.Portal>
      <Primitive.Overlay className="DialogOverlay" />
      <Primitive.Content className="DialogContent">
        <Primitive.Title className="DialogTitle">Edit profile</Primitive.Title>
        <Primitive.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Primitive.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
          <Primitive.Close asChild>
            <button className="Button green">Save changes</button>
          </Primitive.Close>
        </div>
        <Primitive.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Primitive.Close>
      </Primitive.Content>
    </Primitive.Portal>
  </Primitive.Root>
);

export {
  Dialog,
  DialogDemo,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
