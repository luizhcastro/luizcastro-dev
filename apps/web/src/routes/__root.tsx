import { Toaster } from "@luizcastro-dev/ui/components/sonner";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "Luiz Castro",
      },
      {
        name: "description",
        content:
          "Personal site.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/luiz.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/luiz.png",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="min-h-svh bg-background text-foreground">
        <Outlet />
      </div>
      <Toaster richColors />
    </>
  );
}
