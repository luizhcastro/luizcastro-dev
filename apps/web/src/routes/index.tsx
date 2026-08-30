import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@luizcastro-dev/ui/components/hover-card";
import { Link, createFileRoute } from "@tanstack/react-router";

import { externalLinks } from "@/content";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: { to: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {title}
        </h2>
        {action ? (
          <Link
            to={action.to}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {action.label}
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function HomeComponent() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-24">
      <section className="pt-10 pb-4 sm:pt-14">
        <img
          src="/luiz.png"
          alt="Luiz Castro"
          width={96}
          height={96}
          className="size-24 rounded-full object-cover"
        />
        <h1 className="mt-7 text-2xl font-semibold tracking-tight">
          Luiz Castro
        </h1>
        <p className="mt-4 text-muted-foreground">
          I build infrastructure and tools for AI agents, and care as much about the product and the user experience as the systems underneath.        </p>
        <p className="mt-4 text-muted-foreground">
          Currently building{" "}
          <HoverCard>
            <HoverCardTrigger
              delay={150}
              render={
                <a
                  href="https://monest.com.br/mia"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
                />
              }
            >
              MIA
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <p className="font-medium text-foreground">
                Monest Artificial Intelligence
              </p>
              <p className="mt-1 text-muted-foreground">
                AI agent that handles debt collection e2e.
              </p>
            </HoverCardContent>
          </HoverCard>{" "}
          at <a
            href="https://monest.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
          >
            Monest
          </a>
        </p>
      </section>

      <footer className="flex flex-col gap-2 pt-12 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6">
        <span>
          Brazil ·{" "}
          <a
            href="mailto:luizcastro2122@gmail.com"
            className="underline underline-offset-4 decoration-border transition-colors hover:text-foreground"
          >
            say hi
          </a>
        </span>
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {externalLinks.map((link) => {
            const external = link.url.startsWith("http");
            return (
              <li
                key={link.url}
                className="before:mr-2 before:content-['\00b7'] first:before:hidden"
              >
                <a
                  href={link.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <Link
          to="/what-am-i-looking-for"
          className="underline underline-offset-4 decoration-border transition-colors hover:text-foreground"
        >
          What am I looking for
        </Link>
      </footer>
    </main>
  );
}
