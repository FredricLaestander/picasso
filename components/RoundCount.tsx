export const RoundCount = ({
  round,
  maxRounds,
}: {
  round: number;
  maxRounds: number;
}) => {
  return (
    <div className="flex">
      <p className="text-sm">
        {round} / {maxRounds}
      </p>
    </div>
  );
};
