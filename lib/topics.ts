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
        slug: "ai-newsletter",
        title: "AI Newsletter Automation",
        description:
          "Real-world MCP project: automated AI newsletter pipeline using 8 MCP servers.",
        htmlFile: "/content/mcp/ai-newsletter.html",
        duration: "20 min",
      },
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
        slug: "lifecycle",
        title: "MCP Lifecycle",
        description:
          "Understand the complete lifecycle: initialization, tool discovery, request/response, and error handling.",
        htmlFile: "/content/mcp/lifecycle.html",
        duration: "15 min",
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
        slug: "build-client",
        title: "Build a Client",
        description:
          "Create custom MCP clients using langchain-mcp-adapters to go beyond Claude Desktop.",
        htmlFile: "/content/mcp/build-client.html",
        duration: "22 min",
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
        slug: "genai-vs-agentic-ai",
        title: "GenAI vs Agentic AI",
        description:
          "From a simple chatbot to an autonomous agent — understand the evolution and key distinctions.",
        htmlFile: "/content/agentic%20ai/genai_vs_agentic_ai.html",
        duration: "18 min",
      },
      {
        slug: "what-is-agentic-ai",
        title: "What is Agentic AI?",
        description:
          "A formal study of Agentic AI — its definition, six characteristics, and five core components.",
        htmlFile: "/content/agentic%20ai/what_is_agentic_ai.html",
        duration: "20 min",
      },
    ],
  },
  {
    slug: "rag",
    title: "Retrieval-Augmented Generation",
    shortTitle: "RAG",
    description:
      "Learn how RAG combines LLMs with your own knowledge base — eliminate hallucinations, build document Q&A systems, and understand chunking, embeddings, vector stores, and retrieval pipelines.",
    color: "#0ea5e9",
    icon: "🔍",
    lessons: [
      {
        slug: "study-notes",
        title: "RAG Study Notes",
        description:
          "Core concepts: what RAG is, why it beats fine-tuning, the indexing pipeline, chunking strategies, embedding models, and retrieval techniques.",
        htmlFile: "/content/RAG/study-notes.html",
        duration: "30 min",
      },
      {
        slug: "flow-diagram",
        title: "RAG Flow Diagram",
        description:
          "Visual step-by-step walkthrough of the complete RAG pipeline — from raw documents to LLM-generated answers, with failure modes and fixes.",
        htmlFile: "/content/RAG/flow-diagram.html",
        duration: "20 min",
      },
    ],
  },
  {
    slug: "redis",
    title: "Redis",
    shortTitle: "Redis",
    description:
      "Master Redis from the ground up — in-memory data structures, caching patterns, OTP verification, Pub/Sub, job queues with BullMQ, leaderboards with Sorted Sets, and production patterns.",
    color: "#dc2626",
    icon: "⚡",
    lessons: [
      {
        slug: "introduction",
        title: "Introduction to Redis",
        description:
          "What Redis is, core data types (String, Hash, List, Set, Sorted Set), essential commands, use cases, and persistence modes.",
        htmlFile: "/content/Redis/introduction.html",
        duration: "20 min",
      },
      {
        slug: "local-setup",
        title: "Local Setup",
        description:
          "Install Redis on Linux, macOS, or Docker. Connect via redis-cli, explore the config file, and wire up ioredis in Node.js.",
        htmlFile: "/content/Redis/local-setup.html",
        duration: "15 min",
      },
      {
        slug: "otp-verification",
        title: "OTP Verification",
        description:
          "Build a secure OTP system using Redis TTL — automatic expiry, rate limiting, one-time use enforcement, and Node.js implementation.",
        htmlFile: "/content/Redis/otp-verification.html",
        duration: "18 min",
      },
      {
        slug: "pubsub",
        title: "Pub/Sub Messaging",
        description:
          "Real-time fan-out messaging with PUBLISH/SUBSCRIBE. Channels, pattern subscriptions, Node.js implementation, and comparison with Streams and BullMQ.",
        htmlFile: "/content/Redis/pubsub.html",
        duration: "20 min",
      },
      {
        slug: "email-queue",
        title: "Email Queue",
        description:
          "Decouple email sending with a Redis List queue. Producer/consumer pattern, LPUSH/BRPOP, dead-letter queue, and retry logic.",
        htmlFile: "/content/Redis/email-queue.html",
        duration: "22 min",
      },
      {
        slug: "bullmq-infrastructure",
        title: "BullMQ Queue Infrastructure",
        description:
          "Production job queues on Redis: Queue, Worker, automatic retries, delayed jobs, concurrency control, repeatable cron jobs, and Bull Board dashboard.",
        htmlFile: "/content/Redis/bullmq-infrastructure.html",
        duration: "25 min",
      },
      {
        slug: "site-banner-apis",
        title: "Site Banner APIs",
        description:
          "Cache banner configurations using the cache-aside pattern. Cache invalidation strategies, key naming conventions, and JSON vs Hash storage choice.",
        htmlFile: "/content/Redis/site-banner-apis.html",
        duration: "18 min",
      },
      {
        slug: "user-profile-json-vs-hash",
        title: "User Profile: JSON vs HASH",
        description:
          "Deep comparison of JSON string storage vs Redis Hash for user profiles — atomic updates, partial reads, memory efficiency, and the hybrid approach.",
        htmlFile: "/content/Redis/user-profile-json-vs-hash.html",
        duration: "20 min",
      },
      {
        slug: "live-leaderboard",
        title: "Live Leaderboard",
        description:
          "Build a real-time leaderboard with Redis Sorted Sets — ZADD, ZINCRBY, ZREVRANGE, ZREVRANK. REST API, multiple time-window boards, and WebSocket integration.",
        htmlFile: "/content/Redis/live-leaderboard.html",
        duration: "22 min",
      },
    ],
  },
  {
    slug: "system-design",
    title: "System Design",
    shortTitle: "System Design",
    description:
      "Master system design from fundamentals to real-world architectures — scalability, load balancing, caching, databases, CAP theorem, microservices, API design, message queues, and a full URL shortener case study.",
    color: "#6366f1",
    icon: "🏗",
    lessons: [
      {
        slug: "fundamentals",
        title: "Part 1: Fundamentals",
        description:
          "Core properties (scalability, availability, reliability), vertical vs horizontal scaling, load balancing algorithms, caching strategies, database sharding & replication, and the CAP theorem.",
        htmlFile: "/content/system%20design/part1.html",
        duration: "40 min",
      },
      {
        slug: "patterns-and-case-studies",
        title: "Part 2: Patterns & Case Studies",
        description:
          "Microservices vs monolith, REST/GraphQL/gRPC, message queues, rate limiting algorithms, consistent hashing, and a full end-to-end URL shortener design with architecture diagrams.",
        htmlFile: "/content/system%20design/part2.html",
        duration: "45 min",
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
