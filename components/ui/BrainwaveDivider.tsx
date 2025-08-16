interface BrainwaveDividerProps {
  className?: string;
}

export function BrainwaveDivider({
  className = "my-6",
}: BrainwaveDividerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex-1 h-px bg-border"></div>
      <img
        src="/brainwave-unscreen.gif"
        alt="Section divider"
        className="w-32 h-12 object-cover opacity-70 mx-6"
      />
      <div className="flex-1 h-px bg-border"></div>
    </div>
  );
}
