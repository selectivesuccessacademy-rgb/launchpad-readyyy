export const LightningEffect = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute w-1 h-32 bg-gradient-to-b from-cyan-400 to-transparent left-1/4 top-1/3 lightning-bolt" />
      <div className="absolute w-1 h-40 bg-gradient-to-b from-blue-300 to-transparent right-1/3 top-1/4 lightning-bolt-delayed" />
      <div className="absolute w-0.5 h-24 bg-gradient-to-b from-cyan-300 to-transparent left-2/3 top-1/2 lightning-bolt" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};
