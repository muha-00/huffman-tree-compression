
import React, { useEffect, useRef } from 'react';

// Define the HuffmanNode type to include frequency property
interface HuffmanNode {
  left?: HuffmanNode;
  right?: HuffmanNode;
  value?: string;
  frequency?: number;
  code?: string;
}

interface TreeVisualizationProps {
  data?: HuffmanNode;
  className?: string;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!data || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas dimensions
    canvas.width = 1000;
    canvas.height = 500;

    // Draw the tree
    const drawTree = (node: HuffmanNode, x: number, y: number, horizontalSpacing: number) => {
      if (!node) return;

      // Draw node
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = node.value ? '#4dabf7' : '#868e96';
      ctx.fill();
      ctx.stroke();

      // Draw node text
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '12px Arial';
      const displayText = node.value 
        ? `${node.value}:${node.frequency}` 
        : node.frequency?.toString() || '';
      ctx.fillText(displayText, x, y);

      // Draw connections to children
      const nextY = y + 80;
      const nextSpacing = horizontalSpacing / 2;

      if (node.left) {
        const leftX = x - nextSpacing;
        ctx.beginPath();
        ctx.moveTo(x, y + 20);
        ctx.lineTo(leftX, nextY - 20);
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('0', (x + leftX) / 2, (y + 20 + nextY - 20) / 2);
        drawTree(node.left, leftX, nextY, nextSpacing);
      }

      if (node.right) {
        const rightX = x + nextSpacing;
        ctx.beginPath();
        ctx.moveTo(x, y + 20);
        ctx.lineTo(rightX, nextY - 20);
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('1', (x + rightX) / 2, (y + 20 + nextY - 20) / 2);
        drawTree(node.right, rightX, nextY, nextSpacing);
      }
    };

    // Start drawing from the root
    drawTree(data, canvas.width / 2, 50, canvas.width / 4);
  }, [data]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="w-full h-full border rounded-lg"></canvas>
    </div>
  );
};

export default TreeVisualization;
