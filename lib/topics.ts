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
    slug: "python",
    title: "Python",
    shortTitle: "Python",
    description:
      "Master Python from the ground up — variables & data types, strings, conditionals, lists, tuples, dictionaries, sets, loops, functions, recursion, file I/O, and complete Object-Oriented Programming.",
    color: "#2563eb",
    icon: "🐍",
    lessons: [
      {
        slug: "variables-data-types",
        title: "Variables & Data Types",
        description:
          "What programming is, how Python works under the hood, variables, the 5 primary data types, keywords, comments, operators, and type conversion.",
        htmlFile: "/content/python/variables-data-types.html",
        duration: "25 min",
      },
      {
        slug: "strings-conditionals",
        title: "Strings & Conditional Statements",
        description:
          "String creation, escape sequences, indexing, slicing, built-in string methods, and decision-making with if / elif / else and nested conditions.",
        htmlFile: "/content/python/strings-conditionals.html",
        duration: "28 min",
      },
      {
        slug: "lists-tuples",
        title: "Lists & Tuples",
        description:
          "Mutable vs immutable sequences — list indexing, slicing, all the key list methods, and everything about tuples and when to prefer them.",
        htmlFile: "/content/python/lists-tuples.html",
        duration: "26 min",
      },
      {
        slug: "dictionary-set",
        title: "Dictionary & Set",
        description:
          "Key-value storage with dictionaries, safe access with .get(), nested dictionaries, and unique unordered collections with sets.",
        htmlFile: "/content/python/dictionary-set.html",
        duration: "26 min",
      },
      {
        slug: "loops",
        title: "Loops in Python",
        description:
          "while and for loops, break / continue / pass, the range() function, nested loops, and the linear search algorithm.",
        htmlFile: "/content/python/loops.html",
        duration: "24 min",
      },
      {
        slug: "functions-recursion",
        title: "Functions & Recursion",
        description:
          "Defining and calling functions, parameters vs arguments, default parameters, and recursion — base cases, the call stack, and recursive patterns.",
        htmlFile: "/content/python/functions-recursion.html",
        duration: "24 min",
      },
      {
        slug: "file-io",
        title: "File Input/Output",
        description:
          "Opening files in r/w/a modes, reading and writing text, the with statement, deleting files with os.remove(), and modules.",
        htmlFile: "/content/python/file-io.html",
        duration: "20 min",
      },
      {
        slug: "oop-basics",
        title: "OOP in Python (Part 1)",
        description:
          "Classes, objects, the __init__ constructor, self, instance vs class attributes, methods, static methods, abstraction, and encapsulation.",
        htmlFile: "/content/python/oop-basics.html",
        duration: "22 min",
      },
      {
        slug: "oop-advanced",
        title: "OOP in Python (Part 2)",
        description:
          "Private attributes, inheritance (single, multi-level, multiple), super(), class methods, @property, polymorphism, and dunder functions.",
        htmlFile: "/content/python/oop-advanced.html",
        duration: "24 min",
      },
    ],
  },
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
  {
    slug: "fastapi",
    title: "FastAPI",
    shortTitle: "FastAPI",
    description:
      "Build production-ready APIs with Python's fastest framework — HTTP fundamentals, Pydantic validation, CRUD patterns, ML model serving, Docker, and full AWS deployment.",
    color: "#0d9488",
    icon: "⚡",
    lessons: [
      {
        slug: "api-fundamentals",
        title: "API Fundamentals",
        description:
          "What APIs are, the HTTP request/response cycle, HTTP methods and status codes, REST principles, and JSON data format.",
        htmlFile: "/content/FastAPI/lesson-1-api-fundamentals.html",
        duration: "20 min",
      },
      {
        slug: "fastapi-philosophy",
        title: "FastAPI Philosophy",
        description:
          "Why FastAPI exists, its performance advantages over Flask and Django REST, auto-documentation, and your first Hello World endpoint.",
        htmlFile: "/content/FastAPI/lesson-2-fastapi-philosophy.html",
        duration: "18 min",
      },
      {
        slug: "http-methods",
        title: "HTTP Methods in FastAPI",
        description:
          "Master GET, POST, PUT, PATCH, and DELETE route decorators, idempotency, status codes, and a complete CRUD API skeleton.",
        htmlFile: "/content/FastAPI/lesson-3-http-methods.html",
        duration: "22 min",
      },
      {
        slug: "path-query-params",
        title: "Path & Query Parameters",
        description:
          "URL anatomy, dynamic path parameters with type validation, Enum params, optional query parameters with defaults, and when to use each.",
        htmlFile: "/content/FastAPI/lesson-4-path-query-params.html",
        duration: "20 min",
      },
      {
        slug: "pydantic",
        title: "Pydantic Crash Course",
        description:
          "BaseModel, type coercion, Field constraints, nested models, and serialization with model_dump() and exclude_unset for PATCH endpoints.",
        htmlFile: "/content/FastAPI/lesson-5-pydantic.html",
        duration: "25 min",
      },
      {
        slug: "post-requests",
        title: "POST Requests & Request Body",
        description:
          "Receiving JSON bodies, parsing with Pydantic, HTTP status codes, response_model for output filtering, and batch POST endpoints.",
        htmlFile: "/content/FastAPI/lesson-6-post-requests.html",
        duration: "20 min",
      },
      {
        slug: "put-delete",
        title: "PUT & DELETE",
        description:
          "Full replace vs partial update, model_copy for PATCH, safe deletion with 404 handling, and organizing routes with APIRouter.",
        htmlFile: "/content/FastAPI/lesson-7-put-delete.html",
        duration: "20 min",
      },
      {
        slug: "serving-ml-models",
        title: "Serving ML Models",
        description:
          "Load models at startup with lifespan, tabular prediction endpoints, image upload with UploadFile, batch inference, and production patterns.",
        htmlFile: "/content/FastAPI/lesson-8-serving-ml-models.html",
        duration: "30 min",
      },
      {
        slug: "improving-fastapi",
        title: "Improving Your FastAPI App",
        description:
          "Custom error handling, CORS middleware, request logging, background tasks, and dependency injection with Depends().",
        htmlFile: "/content/FastAPI/lesson-9-improving-fastapi.html",
        duration: "30 min",
      },
      {
        slug: "docker-crash-course",
        title: "Docker Crash Course",
        description:
          "Docker concepts (image vs container), writing a Dockerfile, essential CLI commands, .dockerignore, and environment variables.",
        htmlFile: "/content/FastAPI/lesson-10-docker-crash-course.html",
        duration: "30 min",
      },
      {
        slug: "dockerize-fastapi",
        title: "Dockerize FastAPI",
        description:
          "Production Dockerfile for FastAPI, docker-compose with Postgres and Redis, dev vs prod configs, and container networking.",
        htmlFile: "/content/FastAPI/lesson-11-dockerize-fastapi.html",
        duration: "25 min",
      },
      {
        slug: "deploy-aws",
        title: "Deploy to AWS",
        description:
          "Three AWS deployment paths — EC2 with Docker, ECR + ECS Fargate for managed containers, and App Runner for the simplest route.",
        htmlFile: "/content/FastAPI/lesson-12-deploy-aws.html",
        duration: "35 min",
      },
      {
        slug: "course-launch",
        title: "Course Complete & Next Steps",
        description:
          "Review all 13 lessons, production best practices checklist, recommended project structure, and what to learn next.",
        htmlFile: "/content/FastAPI/lesson-13-course-launch.html",
        duration: "20 min",
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
