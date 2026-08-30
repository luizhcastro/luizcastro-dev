import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { thoughts } from "@/content";

export const Route = createFileRoute("/what-am-i-looking-for")({
  component: ThoughtComponent,
  loader: () => {
    const thought = thoughts.find(
      (item) => item.slug === "what-am-i-looking-for",
    );

    if (!thought) {
      throw notFound();
    }

    return thought;
  },
});

function ThoughtComponent() {
  const thought = Route.useLoaderData();

  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-24">
      <Link
        to="/"
        className="inline-block pt-10 text-sm text-muted-foreground transition-colors hover:text-foreground sm:pt-14"
      >
        ← Luiz Castro
      </Link>
      <article className="pt-6 pb-10">
        <time className="text-sm text-muted-foreground">{thought.date}</time>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          {thought.title}
        </h1>
        <div className="mt-8 space-y-5 text-muted-foreground [&_em]:text-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
          {thought.content}
        </div>
      </article>
    </main>
  );
}
