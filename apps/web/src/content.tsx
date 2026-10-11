import type { ReactNode } from "react";

export type ExternalLink = {
  name: string;
  url: string;
};

export const externalLinks: ExternalLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/luizzcastro" },
  { name: "GitHub", url: "https://github.com/luizhcastro" },
  { name: "Twitter/X", url: "https://x.com/loez__" },
  { name: "Linktree", url: "/linktree" },
];

export type Project = {
  name: string;
  description: string;
  // ponytail: no url = coming soon
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Radar",
    description: "newsletter with tech blog posts curated to your profile",
  },
  {
    name: "MacStats",
    description: "native macOS menu bar app for real-time system stats",
    url: "https://macstats.luizcastro.dev",
  },
];

export type Thought = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
};

export const thoughts: Thought[] = [

  {
    slug: "what-am-i-looking-for",
    title: "What am I looking for?",
    date: "2026-02-17",
    excerpt:
      "A personal reflection on feeling things fully, staying present, and putting your heart into the work.",
    content: (
      <>
        <p>
          I know people who handle their feelings very well. They know how to
          keep life and emotions in separate, organized drawers, so that events
          in one area of their life don't directly affect other aspects.
        </p>
        <p>
          In contrast, there are people like me, for whom life is a true mix of
          feelings, everything tangled together like a well-made pasta. There is
          a certain <strong>beauty</strong> in this way of living.
        </p>
        <p>
          People who live in the present and have full self-awareness experience
          difficult moments genuinely, respecting their own state instead of
          repressing it because they think it's weakness.
        </p>
        <p>
          <strong>I seek many things:</strong> recognition, to work at what I
          love, to love, to be loved, to help others, to be present, and to live
          every phase, feeling, and moment authentically.
        </p>
      </>
    ),
  },
];

export type LinktreeLink = {
  name: string;
  description: string;
  url: string;
};

export const linktreeLinks: LinktreeLink[] = [
  {
    name: "Schedule a call",
    description: "let's talk",
    url: "https://cal.com/luizcastro",
  },
  {
    name: "Railway",
    description: "$20 free credits",
    url: "https://railway.com?referralCode=vO6wl2",
  },
  {
    name: "Curricu.lol",
    description: "get your resume reviewed",
    url: "https://curricu.lol/r/XMtJBuL",
  },
];
