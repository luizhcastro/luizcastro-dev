import {
  Code,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import type { ReactNode } from "react";

export type ExternalLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

export const externalLinks: ExternalLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/luizzcastro",
    icon: <Briefcase aria-hidden className="size-5" strokeWidth={1.8} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/luizhcastro",
    icon: <Code aria-hidden className="size-5" strokeWidth={1.8} />,
  },
  {
    name: "Twitter",
    url: "https://x.com/loez__",
    icon: <MessageCircle aria-hidden className="size-5" strokeWidth={1.8} />,
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
