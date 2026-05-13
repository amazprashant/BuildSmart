import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import ThemeToggle from "@/components/ThemeToggle";

const COMING_SOON = [
  {
    title: "LangChain",
    description:
      "Build LLM-powered applications with chains, agents, and memory. From simple prompts to complex agentic workflows.",
    icon: "🔗",
  },
  {
    title: "Vector Databases",
    description:
      "Store, index, and query high-dimensional embeddings. Pinecone, Qdrant, pgvector — concepts and hands-on.",
    icon: "🗄️",
  },
  {
    title: "AI Agents",
    description:
      "Design autonomous agents that plan, use tools, and iterate. ReAct, tool use, multi-agent orchestration.",
    icon: "🤖",
  },
];

export default function HomePage() {
  const firstTopic = TOPICS[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-slate-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">⚡</span>
            <span className="font-bold text-lg tracking-tight">LearnHub</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="#topics" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Topics
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 dark:from-blue-950/40 dark:via-gray-950 dark:to-purple-950/30 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-400 rounded-full animate-pulse" />
            Growing library of AI &amp; Dev topics
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-5 leading-tight text-gray-900 dark:text-white">
            Learn by{" "}
            <span className="text-gray-900 dark:text-white">Understanding</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Structured deep-dives into AI protocols, frameworks, and modern
            development concepts — built for developers who want to go beyond
            surface-level tutorials.
          </p>
          <Link
            href={`/learn/${firstTopic.slug}/${firstTopic.lessons[0].slug}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-lg transition-colors text-base"
          >
            Start with {firstTopic.shortTitle}
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ── Topics Grid ── */}
      <section id="topics" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Tracks</h2>
          <p className="text-gray-500 dark:text-gray-500 mt-1">
            Pick a topic and follow structured lessons from beginner to
            advanced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Available topics */}
          {TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/learn/${topic.slug}`}
              className="group bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
              style={{ borderTop: `3px solid ${topic.color}` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-2xl w-11 h-11 flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${topic.color}18` }}
                >
                  {topic.icon}
                </span>
                <span className="text-xs bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-0.5 rounded-full font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                {topic.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-gray-800">
                <span className="text-xs text-gray-500">
                  {topic.lessons.length} lessons
                </span>
                <span className="text-sm group-hover:translate-x-1 transition-transform inline-block font-medium" style={{ color: topic.color }}>
                  Start →
                </span>
              </div>
            </Link>
          ))}

          {/* Coming soon */}
          {COMING_SOON.map((item) => (
            <div
              key={item.title}
              className="bg-slate-100/60 dark:bg-gray-900/40 border border-slate-200/60 dark:border-gray-800/40 rounded-xl p-6 opacity-50 select-none"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl grayscale">{item.icon}</span>
                <span className="text-xs bg-slate-100 dark:bg-gray-800 text-gray-500 border border-slate-200 dark:border-gray-700 px-2.5 py-0.5 rounded-full font-medium">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-600 text-sm mb-5 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-3 border-t border-slate-200/50 dark:border-gray-800/50">
                <span className="text-xs text-gray-500 dark:text-gray-600">In progress</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 dark:border-gray-800 py-8 px-6 text-center text-gray-500 dark:text-gray-600 text-sm">
        <span>LearnHub — Built for continuous learning</span>
      </footer>
    </div>
  );
}
