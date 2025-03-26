
import React from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { 
  ArrowUpFromLine, 
  ArrowDownToLine,
  Percent,
  Scale
} from 'lucide-react';

interface CompressionStatsProps {
  stats: {
    originalSize: number;
    compressedSize: number;
    compressionRatio: number;
    spaceSaved: number;
  } | null;
  className?: string;
}

const StatCard = ({ 
  icon, 
  label, 
  value, 
  unit 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string | number; 
  unit?: string;
}) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border bg-card">
    <div className="p-3 rounded-lg bg-primary/10">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-medium flex items-center gap-1">
        {value}
        {unit && <span className="text-sm font-normal text-muted-foreground">{unit}</span>}
      </p>
    </div>
  </div>
);

const CompressionStats: React.FC<CompressionStatsProps> = ({ stats, className }) => {
  if (!stats) {
    return (
      <Card className={cn("p-6", className)}>
        <p className="text-center text-muted-foreground">
          Compression statistics will appear here
        </p>
      </Card>
    );
  }
  
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="text-lg font-medium mb-4">Compression Statistics</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard
          icon={<ArrowUpFromLine className="w-5 h-5 text-primary" />}
          label="Original Size"
          value={stats.originalSize}
          unit="bits"
        />
        
        <StatCard
          icon={<ArrowDownToLine className="w-5 h-5 text-primary" />}
          label="Compressed Size"
          value={stats.compressedSize}
          unit="bits"
        />
        
        <StatCard
          icon={<Scale className="w-5 h-5 text-primary" />}
          label="Compression Ratio"
          value={stats.compressionRatio.toFixed(2) + 'x'}
        />
        
        <StatCard
          icon={<Percent className="w-5 h-5 text-primary" />}
          label="Space Saved"
          value={stats.spaceSaved.toFixed(1)}
          unit="%"
        />
      </div>
    </Card>
  );
};

export default CompressionStats;
