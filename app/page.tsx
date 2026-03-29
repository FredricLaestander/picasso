import { getRandomColor } from "@/lib/colors";

// import { Preview } from "@/components/screens/Preview";
import { Game } from "@/components/screens/Game";

export default function Home() {
  // const color = getRandomColor();
  const defaultColor = getRandomColor();

  return (
    <main className="flex justify-center items-center min-h-dvh">
      {/* <Preview color={color} /> */}
      <Game defaultColor={defaultColor} />
    </main>
  );
}
