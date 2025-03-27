
import React, { useState } from 'react';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';
import { useQuery } from '@tanstack/react-query';
import { encode, decode } from '../lib/huffman';
import FileUploader from '@/components/FileUploader';
import TextArea from '@/components/TextArea';
import TreeVisualization from '@/components/TreeVisualization';
import CodeTable from '@/components/CodeTable';
import CompressionStats from '@/components/CompressionStats';

const Index = () => {
  const [inputText, setInputText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [huffmanData, setHuffmanData] = useState<any>(null);
  
  const { data: result, isLoading } = useQuery({
    queryKey: ['huffman', inputText],
    queryFn: async () => {
      if (!inputText) return null;
      
      try {
        const encoded = encode(inputText);
        const decoded = decode(encoded.encodedData, encoded.tree);
        
        return {
          original: inputText,
          encodedData: encoded.encodedData,
          tree: encoded.tree,
          codeTable: encoded.codeTable,
          decoded: decoded,
          compressionRatio: encoded.compressionRatio,
          originalSize: encoded.originalSize,
          compressedSize: encoded.compressedSize,
          savings: encoded.savings
        };
      } catch (error) {
        console.error('Huffman coding error:', error);
        toast.error('Error processing the text. Please try again.');
        return null;
      }
    },
    enabled: !!inputText,
    staleTime: 60000,
  });
  
  const handleFileUpload = (text: string, name: string) => {
    setInputText(text);
    setFileName(name);
  };
  
  const handleTextInput = (text: string) => {
    setInputText(text);
    setFileName('');
  };
  
  const handleDownload = () => {
    if (!result) return;
    
    const fileData = JSON.stringify({
      encodedData: result.encodedData,
      tree: result.tree,
      originalSize: result.originalSize,
      compressedSize: result.compressedSize
    }, null, 2);
    
    const blob = new Blob([fileData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName ? `${fileName.split('.')[0]}_compressed.json` : 'compressed_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Compressed file downloaded successfully!');
  };
  
  React.useEffect(() => {
    if (result) {
      setHuffmanData(result);
    }
  }, [result]);

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Text Compression with Huffman Coding</h1>
          <p className="text-muted-foreground">
            Compress text using Huffman coding algorithm, visualize the tree, and download compressed data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Input Text</h2>
              <div className="space-y-4">
                <FileUploader onFileUpload={handleFileUpload} />
                <div className="text-center text-sm text-muted-foreground">- OR -</div>
                <TextArea onTextChange={handleTextInput} placeholder="Type or paste your text here..." />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {isLoading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : huffmanData ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CompressionStats
                    originalSize={huffmanData.originalSize}
                    compressedSize={huffmanData.compressedSize}
                    compressionRatio={huffmanData.compressionRatio}
                    savings={huffmanData.savings}
                  />
                  
                  <div className="bg-card rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Download</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download the compressed data as a JSON file. This file contains the encoded data and the Huffman tree needed for decoding.
                    </p>
                    <Button 
                      onClick={handleDownload} 
                      className="w-full"
                    >
                      Download Compressed File
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Huffman Tree Visualization</h2>
                  <TreeVisualization data={huffmanData.tree} className="h-[400px] bg-muted/30 rounded-lg" />
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Huffman Code Table</h2>
                  <CodeTable codeTable={huffmanData.codeTable} />
                </div>
              </>
            ) : inputText ? (
              <div className="bg-card rounded-lg p-6 shadow-sm flex justify-center items-center min-h-[300px]">
                <p className="text-muted-foreground">Processing...</p>
              </div>
            ) : (
              <div className="bg-card rounded-lg p-6 shadow-sm flex justify-center items-center min-h-[300px]">
                <p className="text-muted-foreground">Enter some text or upload a file to generate the Huffman coding.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
