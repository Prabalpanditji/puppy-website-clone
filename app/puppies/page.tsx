import { pages } from "@/components/site/pages";
const p = pages["puppies"];
export const metadata = { title: p.title, description: p.description };
export default function Page() {
  return <p.C />;
}
