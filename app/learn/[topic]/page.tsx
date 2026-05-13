import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS, getTopicBySlug } from "@/lib/topics";
import ThemeToggle from "@/components/ThemeToggle";

interface Props {
  params: { topic: string };
}

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopicBySlug(params.topic);
  return { title: topic ? topic.title : "Topic" };
}

export default function TopicPage({ params }: Props) {
  const topic = getTopicBySlug(params.topic);
  if (!topic) notFound();

  const totalMins = topic.lessons.reduce((sum, l) => {
    const m = l.duration ? parseInt(l.duration) : 0;
    return sum + m;
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-slate-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              LearnHub
            </Link>
            <span className="text-slate-300 dark:text-gray-700">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{topic.shortTitle}</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* ── Topic Header ── */}
      <section
        className="py-16 px-6 border-b border-slate-200 dark:border-gray-800"
        style={{ background: `linear-gradient(135deg, ${topic.color}12 0%, transparent 60%)` }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="w-16 h-16 flex items-center justify-center text-4xl rounded-2xl mb-5"
            style={{ backgroundColor: `${topic.color}20` }}
          >
            {topic.icon}
          </div>
          <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">{topic.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
            {topic.description}
          </p>
          <div className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-500">
            <span>
              <strong className="text-gray-800 dark:text-gray-300">{topic.lessons.length}</strong> lessons
            </span>
            <span className="text-slate-300 dark:text-gray-700">|</span>
            <span>
              <strong className="text-gray-800 dark:text-gray-300">~{totalMins} min</strong> total
            </span>
            <span className="text-slate-300 dark:text-gray-700">|</span>
            <span>Beginner → Advanced</span>
          </div>
        </div>
      </section>

      {/* ── Lessons List ── */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-6">
          Lessons
        </h2>
        <div className="space-y-3">
          {topic.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/learn/${topic.slug}/${lesson.slug}`}
              className="group flex items-center gap-4 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-xl p-4 hover:border-blue-400/50 dark:hover:border-blue-700/50 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/20 transition-all"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: `${topic.color}18`, color: topic.color, border: `1px solid ${topic.color}40` }}
              >
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {lesson.title}
                </div>
                <div className="text-gray-500 dark:text-gray-500 text-sm mt-0.5 truncate">
                  {lesson.description}
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                {lesson.duration && (
                  <span className="text-xs text-gray-400 dark:text-gray-600 hidden sm:inline">
                    {lesson.duration}
                  </span>
                )}
                <span className="text-gray-400 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all inline-block">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={`/learn/${topic.slug}/${topic.lessons[0].slug}`}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: topic.color }}
          >
            Start Lesson 1 →
          </Link>
        </div>
      </section>
    </div>
  );
}
