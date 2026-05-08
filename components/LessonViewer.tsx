"use client";

import Link from "next/link";
import { useState } from "react";
import type { Topic, Lesson } from "@/lib/topics";

interface Props {
  topic: Topic;
  lesson: Lesson;
  lessonIndex: number;
}

export default function LessonViewer({ topic, lesson, lessonIndex }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const prevLesson = lessonIndex > 0 ? topic.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < topic.lessons.length - 1
      ? topic.lessons[lessonIndex + 1]
      : null;

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* ── Top Nav ── */}
      <header className="h-14 bg-gray-900 text-white flex items-center justify-between px-4 flex-shrink-0 z-20 shadow-lg">
        {/* Left: breadcrumb */}
        <div className="flex items-center gap-1.5 text-sm min-w-0">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="p-1.5 rounded hover:bg-gray-700 transition-colors mr-1 flex-shrink-0"
            aria-label="Toggle sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex-shrink-0"
          >
            ⚡ LearnHub
          </Link>
          <span className="text-gray-600 flex-shrink-0">/</span>
          <Link
            href={`/learn/${topic.slug}`}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            {topic.shortTitle}
          </Link>
          <span className="text-gray-600 flex-shrink-0">/</span>
          <span className="text-white font-medium truncate">{lesson.title}</span>
          <span className="ml-2 text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded flex-shrink-0">
            {lessonIndex + 1} / {topic.lessons.length}
          </span>
        </div>

        {/* Right: Prev / Next */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          {prevLesson ? (
            <Link
              href={`/learn/${topic.slug}/${prevLesson.slug}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded text-sm text-gray-600 cursor-not-allowed">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </span>
          )}

          {nextLesson ? (
            <Link
              href={`/learn/${topic.slug}/${nextLesson.slug}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded text-sm transition-colors font-medium"
            >
              <span className="hidden sm:inline">Next</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 rounded text-sm text-gray-600 cursor-not-allowed">
              <span className="hidden sm:inline">Next</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          )}
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className={`flex-shrink-0 bg-gray-50 border-r border-gray-200 overflow-y-auto transition-all duration-200 ${
            sidebarOpen ? "w-64" : "w-0"
          }`}
        >
          <div className="p-4 min-w-64">
            {/* Topic header */}
            <Link
              href={`/learn/${topic.slug}`}
              className="flex items-center gap-2 mb-4 group"
            >
              <span className="text-xl">{topic.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-gray-700 transition-colors leading-tight">
                {topic.title}
              </span>
            </Link>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{lessonIndex + 1} / {topic.lessons.length}</span>
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all"
                  style={{
                    width: `${((lessonIndex + 1) / topic.lessons.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Lesson list */}
            <nav className="space-y-0.5">
              {topic.lessons.map((l, index) => {
                const isActive = l.slug === lesson.slug;
                const isDone = index < lessonIndex;
                return (
                  <Link
                    key={l.slug}
                    href={`/learn/${topic.slug}/${l.slug}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-sm"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        isActive
                          ? "bg-blue-400/40 text-white"
                          : isDone
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isDone ? "✓" : index + 1}
                    </span>
                    <span className="leading-snug">{l.title}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Finish / back button */}
            {!nextLesson && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href={`/learn/${topic.slug}`}
                  className="flex items-center justify-center gap-1.5 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  ✓ Track Complete
                </Link>
              </div>
            )}
          </div>
        </aside>

        {/* ── Content iframe ── */}
        <main className="flex-1 overflow-hidden bg-white">
          <iframe
            key={lesson.htmlFile}
            src={lesson.htmlFile}
            className="w-full h-full border-none"
            title={lesson.title}
          />
        </main>
      </div>
    </div>
  );
}
