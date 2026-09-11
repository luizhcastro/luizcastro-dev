import { Link, createFileRoute } from "@tanstack/react-router";

import { linktreeLinks } from "@/content";

export const Route = createFileRoute("/linktree")({
  component: LinktreeComponent,
});

function LinktreeComponent() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-2xl px-5">
        <Link
          to="/"
          className="pointer-events-auto inline-block pt-10 text-sm text-muted-foreground transition-colors hover:text-foreground sm:pt-14"
        >
          ← Back
        </Link>
      </div>

      <main className="flex min-h-svh flex-col items-center justify-center px-5 py-16 text-center">
        <ul className="flex flex-col gap-4">
          {linktreeLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                data-umami-event={link.name.toLowerCase()}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-foreground">{link.name}</span>{" "}
                <span className="text-sm">{link.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
