const snowflakes = new Array(100).fill(0).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2,
}));

export function Snow() {
  return (
    <div className="absolute inset-0">
      {snowflakes.map(({ x, y, size }) => (
        <div
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{ top: `${x}%`, left: `${y}%`, transform: `scale(${size})` }}
        />
      ))}
    </div>
  );
}
