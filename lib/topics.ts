export interface Lesson {
  slug: string;
  title: string;
  description: string;
  htmlFile: string;
  duration?: string;
}

export interface Topic {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  color: string;
  icon: string;
  lessons: Lesson[];
}

export const TOPICS: Topic[] = [
  {
    slug: "mcp",
    title: "Model Context Protocol",
    shortTitle: "MCP",
    description:
      "Learn MCP — the open protocol that connects AI models to tools, data sources, and services. From fundamentals to building your own servers and clients.",
    color: "#7c5cf7",
    icon: "🔌",
    lessons: [
      {
        slug: "the-why",
        title: "The Why",
        description:
          "Understand why MCP exists, what problem it solves, and how it compares to direct function calling.",
        htmlFile: "/content/mcp/the-why.html",
        duration: "15 min",
      },
      {
        slug: "architecture",
        title: "Architecture",
        description:
          "Deep dive into MCP's technical architecture: Hosts, Clients, and Servers, and how they interact.",
        htmlFile: "/content/mcp/architecture.html",
        duration: "20 min",
      },
      {
        slug: "connect-servers",
        title: "Connecting Servers",
        description:
          "Step-by-step guide to connecting MCP servers to Claude Desktop with JSON configuration.",
        htmlFile: "/content/mcp/connect-servers.html",
        duration: "18 min",
      },
      {
        slug: "build-local-server",
        title: "Build a Local Server",
        description:
          "Hands-on guide to building your own MCP server locally using the fastmcp library.",
        htmlFile: "/content/mcp/build-local-server.html",
        duration: "25 min",
      },
      {
        slug: "lifecycle",
        title: "MCP Lifecycle",
        description:
          "Understand the complete lifecycle: initialization, tool discovery, request/response, and error handling.",
        htmlFile: "/content/mcp/lifecycle.html",
        duration: "15 min",
      },
      {
        slug: "build-client",
        title: "Build a Client",
        description:
          "Create custom MCP clients using langchain-mcp-adapters to go beyond Claude Desktop.",
        htmlFile: "/content/mcp/build-client.html",
        duration: "22 min",
      },
      {
        slug: "ai-newsletter",
        title: "AI Newsletter Automation",
        description:
          "Real-world MCP project: automated AI newsletter pipeline using 8 MCP servers.",
        htmlFile: "/content/mcp/ai-newsletter.html",
        duration: "20 min",
      },
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    shortTitle: "Agentic AI",
    description:
      "Understand what Agentic AI really means — its six defining characteristics, core components, and how it fundamentally differs from traditional Generative AI.",
    color: "#e8620a",
    icon: "🧠",
    lessons: [
      {
        slug: "what-is-agentic-ai",
        title: "What is Agentic AI?",
        description:
          "A formal study of Agentic AI — its definition, six characteristics, and five core components.",
        htmlFile: "/content/agentic%20ai/what_is_agentic_ai.html",
        duration: "20 min",
      },
      {
        slug: "genai-vs-agentic-ai",
        title: "GenAI vs Agentic AI",
        description:
          "From a simple chatbot to an autonomous agent — understand the evolution and key distinctions.",
        htmlFile: "/content/agentic%20ai/genai_vs_agentic_ai.html",
        duration: "18 min",
      },
    ],
  },
  // ── Add future topics here ──────────────────────────────────────────────────
  // {
  //   slug: "langchain",
  //   title: "LangChain",
  //   shortTitle: "LangChain",
  //   description: "...",
  //   color: "#1C4B42",
  //   icon: "🔗",
  //   lessons: [...],
  // },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getLessonBySlug(
  topicSlug: string,
  lessonSlug: string
): { lesson: Lesson; index: number } | undefined {
  const topic = getTopicBySlug(topicSlug);
  if (!topic) return undefined;
  const index = topic.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return undefined;
  return { lesson: topic.lessons[index], index };
}
