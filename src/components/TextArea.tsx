
import React from 'react';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

interface TextAreaProps {
  value: string;
  label: string;
  className?: string;
  badge?: string;
  maxHeight?: string;
  monospace?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  label,
  className,
  badge,
  maxHeight = '200px',
  monospace = false,
}) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };
  
  return (
    <Card className={cn("flex flex-col", className)}>
      <div className="flex items-center justify-between p-4 border-b bg-muted/30">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-medium">{label}</h3>
          {badge && (
            <Badge variant="secondary" className="text-xs font-normal">
              {badge}
            </Badge>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-muted-foreground hover:text-foreground"
          onClick={copyToClipboard}
          disabled={!value}
        >
          <Copy className="h-3.5 w-3.5 mr-1" />
          <span className="text-xs">Copy</span>
        </Button>
      </div>
      
      <div 
        className={cn(
          "p-4 overflow-auto",
          monospace && "font-mono text-sm",
          "transition-all duration-300"
        )}
        style={{ maxHeight }}
      >
        {value ? (
          <p className={cn(
            "whitespace-pre-wrap break-all",
            monospace && "font-mono text-sm"
          )}>
            {value}
          </p>
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No content to display
          </p>
        )}
      </div>
    </Card>
  );
};

export default TextArea;
