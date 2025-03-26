
// Huffman node structure
export class HuffmanNode {
  char: string;
  freq: number;
  left: HuffmanNode | null;
  right: HuffmanNode | null;

  constructor(char: string = '', freq: number = 0) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate character frequencies in a string
export function calculateFrequency(text: string): Map<string, number> {
  const freqMap = new Map<string, number>();
  
  for (const char of text) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  
  return freqMap;
}

// Compare function for priority queue
export function compareNodes(a: HuffmanNode, b: HuffmanNode): number {
  return a.freq - b.freq;
}

// Function to build Huffman Tree
export function buildHuffmanTree(text: string): HuffmanNode | null {
  if (!text || text.length === 0) return null;
  
  // Calculate frequency
  const freqMap = calculateFrequency(text);
  
  // Create priority queue
  const pq: HuffmanNode[] = [];
  
  // Create leaf nodes for each character
  for (const [char, freq] of freqMap.entries()) {
    pq.push(new HuffmanNode(char, freq));
  }
  
  // Sort the priority queue in ascending order of frequency
  pq.sort(compareNodes);
  
  // Build the Huffman tree
  while (pq.length > 1) {
    // Extract two nodes with the lowest frequencies
    const left = pq.shift()!;
    const right = pq.shift()!;
    
    // Create a new internal node with these two nodes as children
    // and with frequency equal to the sum of their frequencies
    const internalNode = new HuffmanNode('', left.freq + right.freq);
    internalNode.left = left;
    internalNode.right = right;
    
    // Add the new node to the priority queue
    pq.push(internalNode);
    
    // Sort the queue again
    pq.sort(compareNodes);
  }
  
  // Return the root of the Huffman tree
  return pq.length > 0 ? pq[0] : null;
}

// Function to generate Huffman codes from the tree
export function generateHuffmanCodes(root: HuffmanNode | null): Map<string, string> {
  const codes = new Map<string, string>();
  
  function generateCodesRecursive(node: HuffmanNode | null, code: string) {
    if (!node) return;
    
    // If this is a leaf node, store the code
    if (!node.left && !node.right && node.char) {
      codes.set(node.char, code);
      return;
    }
    
    // Traverse left with '0'
    generateCodesRecursive(node.left, code + '0');
    
    // Traverse right with '1'
    generateCodesRecursive(node.right, code + '1');
  }
  
  generateCodesRecursive(root, '');
  return codes;
}

// Function to encode text using Huffman codes
export function encodeText(text: string, codes: Map<string, string>): string {
  let encodedText = '';
  
  for (const char of text) {
    const code = codes.get(char);
    if (code) {
      encodedText += code;
    }
  }
  
  return encodedText;
}

// Function to decode Huffman encoded text
export function decodeText(encodedText: string, root: HuffmanNode | null): string {
  if (!root || !encodedText) return '';
  
  let decodedText = '';
  let current = root;
  
  for (const bit of encodedText) {
    // Move left for '0', right for '1'
    if (bit === '0') {
      current = current.left!;
    } else if (bit === '1') {
      current = current.right!;
    }
    
    // If we reach a leaf node, add the character to result and reset to root
    if (!current.left && !current.right) {
      decodedText += current.char;
      current = root;
    }
  }
  
  return decodedText;
}

// Function to calculate compression statistics
export function calculateCompressionStats(
  originalText: string, 
  encodedText: string
): { 
  originalSize: number, 
  compressedSize: number, 
  compressionRatio: number, 
  spaceSaved: number 
} {
  const originalSize = originalText.length * 8; // Assuming 8 bits per character in ASCII
  const compressedSize = encodedText.length;
  const compressionRatio = originalSize / compressedSize;
  const spaceSaved = ((originalSize - compressedSize) / originalSize) * 100;
  
  return {
    originalSize,
    compressedSize,
    compressionRatio,
    spaceSaved
  };
}

// Function to convert Huffman tree to a visualization-friendly format
export function treeToVisualizationData(root: HuffmanNode | null): any {
  if (!root) return null;
  
  function processNode(node: HuffmanNode): any {
    if (!node) return null;
    
    const result: any = {
      freq: node.freq,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    if (node.char) {
      result.char = node.char === ' ' ? 'space' : node.char;
    }
    
    if (node.left || node.right) {
      result.children = [];
      
      if (node.left) {
        result.children.push(processNode(node.left));
      }
      
      if (node.right) {
        result.children.push(processNode(node.right));
      }
    }
    
    return result;
  }
  
  return processNode(root);
}
