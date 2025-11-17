export const MistEffect = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent mist-effect" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/15 via-transparent to-transparent mist-effect" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent" />
    </div>
  );
};
