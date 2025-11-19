import * as React from "react";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Added 'overflow-hidden' here so the header image respects the rounded corners
    className={`rounded-lg border bg-card text-purple-100/90 shadow-sm overflow-hidden ${className || ""}`}
    {...props}
  />
));
Card.displayName = "Card";

// UPDATED: Accepts a 'backgroundImage' prop now
const CardHeader = React.forwardRef(({ className, backgroundImage, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 relative bg-cover bg-center bg-no-repeat ${className || ""}`}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    {...props}
  >
    {/* If an image is present, add a dark overlay so text is readable */}
    {backgroundImage && <div className="absolute inset-0 z-0 bg-black/60" />}
    
    {/* Ensure content sits above the overlay */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${className || ""}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className || ""}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`p-6 pt-0 ${className || ""}`}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className || ""}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };