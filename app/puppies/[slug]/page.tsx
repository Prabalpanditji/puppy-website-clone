import { notFound } from "next/navigation";
import { pages } from "@/components/site/pages";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(pages).filter((k) => k.startsWith("puppies__")).map((k) => ({ slug: k.slice(9) }));
export async function generateMetadata({ params }: Props) {
  const p = pages[`puppies__${(await params).slug}`];
  return p ? { title: p.title, description: p.description } : {};
}
export default async function Page({ params }: Props) {
  const p = pages[`puppies__${(await params).slug}`];
  if (!p) notFound();
  return <p.C />;
}
