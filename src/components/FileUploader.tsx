
import React, { useCallback, useState } from 'react';
import { cn } from "@/lib/utils";
import { Upload, X, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface FileUploaderProps {
  onFileUpload: (text: string) => void;
  maxSize?: number; // in MB
  allowedTypes?: string[];
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileUpload,
  maxSize = 5, // Default max size 5MB
  allowedTypes = ['.txt'],
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  
  const validateFile = useCallback((file: File): boolean => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      toast.error(`File size exceeds the ${maxSize}MB limit`);
      return false;
    }
    
    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      toast.error(`Invalid file type. Allowed types: ${allowedTypes.join(', ')}`);
      return false;
    }
    
    return true;
  }, [maxSize, allowedTypes]);
  
  const processFile = useCallback((file: File) => {
    if (!validateFile(file)) return;
    
    setSelectedFile(file);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        onFileUpload(text);
      }
    };
    reader.readAsText(file);
  }, [validateFile, onFileUpload]);
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  }, [processFile]);
  
  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      processFile(e.target.files[0]);
    }
  }, [processFile]);
  
  const removeFile = useCallback(() => {
    setSelectedFile(null);
  }, []);
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 animate-fade-in">
      {!selectedFile ? (
        <div
          className={cn(
            "relative border-2 border-dashed rounded-xl p-12 transition-all duration-300 ease-in-out",
            "flex flex-col items-center justify-center gap-4 text-center",
            isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
            "cursor-pointer group"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            className="hidden"
            accept={allowedTypes.join(',')}
            onChange={handleFileSelect}
          />
          
          <div className={cn(
            "flex justify-center items-center w-16 h-16 rounded-full",
            "bg-secondary group-hover:bg-primary/10 transition-colors duration-300"
          )}>
            <Upload 
              className={cn(
                "w-8 h-8 text-muted-foreground group-hover:text-primary",
                "transition-transform duration-300 group-hover:scale-110"
              )} 
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Upload a text file</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Drag and drop or click to browse
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Supports: {allowedTypes.join(', ')} up to {maxSize}MB
            </p>
          </div>
        </div>
      ) : (
        <div className="relative border rounded-xl p-6 transition-all animate-scale-in">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
