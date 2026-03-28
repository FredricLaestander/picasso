import { Card } from "@/components/Card";
import { randomColor } from "@/lib/colors";

export default function Home() {
  const rgb = randomColor();
  return (
    <main className="flex justify-center items-center min-h-dvh">
      <Card round={1} maxRounds={5} rgb={rgb}>
        Card
      </Card>
    </main>
  );
}
