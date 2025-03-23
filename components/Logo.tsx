export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-bold text-xl text-white ${className}`}>
      Dot Protocol
    </div>
  );
} 