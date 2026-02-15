/**
 * SectionBackground — Subtle dot grid + floating gradient orbs.
 * White sections only. NO blur() filters. Pure CSS.
 */

export default function AnimatedMesh({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} aria-hidden="true">

      {/* Dot grid — visible but not distracting */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.09) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }} />

      {/* Soft gradient orbs — large size = naturally soft, no blur needed */}
      <div className="absolute animate-mesh-1" style={{
        width: '1000px', height: '1000px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 55%)',
        top: '-25%', right: '-20%',
      }} />
      <div className="absolute animate-mesh-2" style={{
        width: '900px', height: '900px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 55%)',
        bottom: '-30%', left: '-15%',
      }} />
    </div>
  );
}
