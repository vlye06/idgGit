const ROWS = 8;
const COLS = 8;
const CELL = 24;
const SIZE = CELL * COLS;

export function WeavePattern({ className = "" }: { className?: string }) {
  const cells = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const over = (row + col) % 2 === 0;
      const x = col * CELL;
      const y = row * CELL;
      cells.push(
        over ? (
          <rect
            key={`${row}-${col}`}
            x={x + 2}
            y={y}
            width={CELL - 4}
            height={CELL}
            rx={3}
            className="fill-green-500"
          />
        ) : (
          <rect
            key={`${row}-${col}`}
            x={x}
            y={y + 2}
            width={CELL}
            height={CELL - 4}
            rx={3}
            className="fill-paper-100"
            opacity={0.85}
          />
        ),
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      role="img"
      aria-label="Plain-weave pattern of interlaced threads"
    >
      {cells}
    </svg>
  );
}
