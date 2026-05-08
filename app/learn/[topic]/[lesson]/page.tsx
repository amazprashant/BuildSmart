import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOPICS, getTopicBySlug, getLessonBySlug } from "@/lib/topics";
import LessonViewer from "@/components/LessonViewer";

interface Props {
  params: { topic: string; lesson: string };
}

export function generateStaticParams() {
  return TOPICS.flatMap((topic) =>
    topic.lessons.map((lesson) => ({
      topic: topic.slug,
      lesson: lesson.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopicBySlug(params.topic);
  const result = topic ? getLessonBySlug(params.topic, params.lesson) : null;
  return {
    title: result && topic ? `${result.lesson.title} — ${topic.shortTitle}` : "Lesson",
  };
}

export default function LessonPage({ params }: Props) {
  const topic = getTopicBySlug(params.topic);
  if (!topic) notFound();

  const result = getLessonBySlug(params.topic, params.lesson);
  if (!result) notFound();

  return (
    <LessonViewer
      topic={topic}
      lesson={result.lesson}
      lessonIndex={result.index}
    />
  );
}
