export const RoundCount = ({
  round,
  maxRounds,
}: {
  round: number;
  maxRounds: number;
}) => {
  return (
    <div className="flex text-sm invert-1 mix-blend-difference">
      {round} / {maxRounds}
    </div>
  );
};
