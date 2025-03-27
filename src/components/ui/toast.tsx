"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="toast-provider">{children}</div>
)

const ToastViewport: React.FC<React.HTMLAttributes<HTMLDivElement>> = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            className
        )}
        {...props}
    />
))
ToastViewport.displayName = "ToastViewport"

const Toast: React.FC<React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive"; open?: boolean }> = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive"; open?: boolean }
>(({ className, variant = "default", ...props }, ref) => {
    const variantClasses = variant === "destructive"
        ? "border-destructive/50 bg-destructive text-destructive-foreground"
        : "border-border bg-card text-card-foreground";

    return (
        <div
            ref={ref}
            className={cn(
                "group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
                variantClasses,
                className
            )}
            {...props}
        />
    )
})
Toast.displayName = "Toast"

const ToastTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm font-semibold", className)}
        {...props}
    />
))
ToastTitle.displayName = "ToastTitle"

const ToastDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm opacity-90", className)}
        {...props}
    />
))
ToastDescription.displayName = "ToastDescription"

const ToastClose: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "absolute right-2 top-2 rounded-md p-1 text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100",
            className
        )}
        {...props}
    >
        <X className="h-4 w-4" />
    </button>
))
ToastClose.displayName = "ToastClose"

const ToastAction: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            className
        )}
        {...props}
    />
))
ToastAction.displayName = "ToastAction"

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
    type ToastProps,
    type ToastActionElement,
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
} 