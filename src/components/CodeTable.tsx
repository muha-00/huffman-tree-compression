
import React from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodeTableProps {
  codes: Map<string, string>;
  className?: string;
}

const CodeTable: React.FC<CodeTableProps> = ({ codes, className }) => {
  // Convert Map to array and sort by code length (shortest first)
  const sortedCodes = Array.from(codes.entries())
    .sort((a, b) => a[1].length - b[1].length);
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-4 border-b bg-muted/30">
        <h3 className="text-lg font-medium">Huffman Codes</h3>
        <p className="text-sm text-muted-foreground">
          Shorter codes for frequent characters
        </p>
      </div>
      
      <div className="p-4 max-h-[400px] overflow-auto">
        {sortedCodes.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No codes generated yet
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sortedCodes.map(([char, code]) => (
              <div 
                key={char} 
                className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
              >
                <Badge variant="outline" className="flex-shrink-0 min-w-10 justify-center font-mono">
                  {char === ' ' ? '␣' : char}
                </Badge>
                <code className="font-mono text-sm flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {code}
                </code>
                <Badge variant="secondary" className="text-xs">
                  {code.length}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default CodeTable;
