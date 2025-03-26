
import React, { useState, useCallback, useEffect } from 'react';
import { toast } from "sonner";
import Layout from "@/components/Layout";
import FileUploader from "@/components/FileUploader";
import TreeVisualization from "@/components/TreeVisualization";
import CodeTable from "@/components/CodeTable";
import CompressionStats from "@/components/CompressionStats";
import TextArea from "@/components/TextArea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  buildHuffmanTree, 
  generateHuffmanCodes, 
  encodeText, 
  decodeText, 
  calculateCompressionStats, 
  treeToVisualizationData 
} from "@/lib/huffman";
import { Download, RefreshCw } from "lucide-react";

const Index = () => {
  // State for the application
  const [originalText, setOriginalText] = useState<string>('');
  const [huffmanTree, setHuffmanTree] = useState<any>(null);
  const [huffmanCodes, setHuffmanCodes] = useState<Map<string, string>>(new Map());
  const [encodedText, setEncodedText] = useState<string>('');
  const [decodedText, setDecodedText] = useState<string>('');
  const [treeData, setTreeData] = useState<any>(null);
  const [compressionStats, setCompressionStats] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('original');
  
  // Process text and build Huffman tree
  const processText = useCallback((text: string) => {
    if (!text.trim()) {
      toast.error('Please provide some text to compress');
      return;
    }
    
    try {
      setOriginalText(text);
      
      // Build Huffman tree
      const tree = buildHuffmanTree(text);
      setHuffmanTree(tree);
      
      // Generate visualization data
      const visualData = treeToVisualizationData(tree);
      setTreeData(visualData);
      
      // Generate Huffman codes
      const codes = generateHuffmanCodes(tree);
      setHuffmanCodes(codes);
      
      // Encode text
      const encoded = encodeText(text, codes);
      setEncodedText(encoded);
      
      // Decode text (for verification)
      const decoded = decodeText(encoded, tree);
      setDecodedText(decoded);
      
      // Calculate statistics
      const stats = calculateCompressionStats(text, encoded);
      setCompressionStats(stats);
      
      toast.success('Huffman compression completed successfully');
      
      // Switch to encoded tab
      setActiveTab('encoded');
    } catch (error) {
      console.error('Error processing text:', error);
      toast.error('Failed to process text. Please try again.');
    }
  }, []);
  
  // Handle file upload
  const handleFileUpload = useCallback((text: string) => {
    processText(text);
  }, [processText]);
  
  // Handle manual text input
  const handleManualInput = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('manualText') as string;
    processText(text);
  }, [processText]);
  
  // Download encoded output
  const downloadOutput = useCallback(() => {
    if (!encodedText) return;
    
    try {
      // Create JSON with all necessary information
      const outputData = {
        originalText,
        huffmanCodes: Object.fromEntries(huffmanCodes),
        encodedText,
        stats: compressionStats
      };
      
      const blob = new Blob([JSON.stringify(outputData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'huffman-compressed.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('Compressed file downloaded');
    } catch (error) {
      console.error('Error downloading file:', error);
      toast.error('Failed to download file');
    }
  }, [originalText, huffmanCodes, encodedText, compressionStats]);
  
  // Reset the application
  const handleReset = useCallback(() => {
    setOriginalText('');
    setHuffmanTree(null);
    setHuffmanCodes(new Map());
    setEncodedText('');
    setDecodedText('');
    setTreeData(null);
    setCompressionStats(null);
    setActiveTab('original');
    
    toast.success('Application reset successfully');
  }, []);
  
  // Provide example text
  const useExampleText = useCallback(() => {
    const exampleText = "a fast runner need never be afraid of the dark";
    processText(exampleText);
  }, [processText]);
  
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto space-y-8 animate-fade-in">
        {/* File upload section */}
        <section className="mb-8">
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            
            <h2 className="text-2xl font-medium mb-4">Compress Text</h2>
            
            <div className="space-y-6">
              <FileUploader onFileUpload={handleFileUpload} />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    or enter text manually
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleManualInput} className="space-y-4">
                <textarea
                  name="manualText"
                  placeholder="Enter text to compress..."
                  className="w-full min-h-[100px] p-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue={originalText}
                />
                
                <div className="flex flex-wrap gap-2">
                  <Button type="submit" className="hover-lift">
                    Process Text
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={useExampleText}
                    className="hover-lift"
                  >
                    Use Example Text
                  </Button>
                  {originalText && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleReset}
                      className="ml-auto hover-lift group"
                    >
                      <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-all duration-500" />
                      Reset
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </Card>
        </section>
        
        {/* Results section - only shown after compression */}
        {treeData && (
          <>
            {/* Huffman Tree Visualization */}
            <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="p-6">
                <h2 className="text-xl font-medium mb-4">Huffman Tree</h2>
                <div className="overflow-hidden rounded-lg border bg-card">
                  <TreeVisualization 
                    data={treeData} 
                    className="bg-muted/10 min-h-[400px] w-full"
                  />
                </div>
              </Card>
            </section>
            
            {/* Codes and Stats */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CodeTable codes={huffmanCodes} />
              <CompressionStats stats={compressionStats} />
            </section>
            
            {/* Text Content Tabs */}
            <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Text Content</h2>
                  
                  {encodedText && (
                    <Button
                      onClick={downloadOutput}
                      variant="outline"
                      className="gap-2 hover-lift"
                    >
                      <Download className="w-4 h-4" />
                      Download Results
                    </Button>
                  )}
                </div>
                
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full justify-start mb-4">
                    <TabsTrigger value="original">Original Text</TabsTrigger>
                    <TabsTrigger value="encoded">Encoded Binary</TabsTrigger>
                    <TabsTrigger value="decoded">Decoded Text</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="original" className="mt-0">
                    <TextArea
                      value={originalText}
                      label="Original Text"
                      badge={originalText ? `${originalText.length} characters` : undefined}
                      maxHeight="300px"
                    />
                  </TabsContent>
                  
                  <TabsContent value="encoded" className="mt-0">
                    <TextArea
                      value={encodedText}
                      label="Encoded Binary"
                      badge={compressionStats ? `${encodedText.length} bits` : undefined}
                      maxHeight="300px"
                      monospace={true}
                    />
                  </TabsContent>
                  
                  <TabsContent value="decoded" className="mt-0">
                    <TextArea
                      value={decodedText}
                      label="Decoded Text"
                      badge={decodedText ? `${decodedText.length} characters` : undefined}
                      maxHeight="300px"
                    />
                  </TabsContent>
                </Tabs>
              </Card>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
