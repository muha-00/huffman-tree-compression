
// Fix for TypeScript error in the original TreeVisualization component
// The error was related to offsetWidth property not existing on Element type

import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { HuffmanNode } from '../lib/huffman';

const NODE_SIZE = 40;
const NODE_MARGIN = 20;
const NODE_RADIUS = NODE_SIZE / 2;
const VERTICAL_SPACING = 80;

interface NodeRendererProps {
  node: HuffmanNode;
  x: number;
  y: number;
  index: number;
  isLeaf?: boolean;
}

const NodeRenderer: React.FC<NodeRendererProps> = ({ node, x, y, index, isLeaf = false }) => {
  return (
    <g transform={`translate(${x}, ${y})`} className="node" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
      <circle 
        cx={0} 
        cy={0} 
        r={NODE_RADIUS} 
        className={cn(
          "fill-current stroke-current stroke-2",
          isLeaf ? "text-highshine fill-highshine/10" : "text-muted-foreground fill-muted/30"
        )}
      />
      <text 
        x={0} 
        y={isLeaf ? 5 : 3} 
        textAnchor="middle" 
        className={cn(
          "text-xs font-medium",
          isLeaf ? "fill-highshine-dark" : "fill-foreground"
        )}
      >
        {isLeaf ? node.char : node.frequency}
      </text>
      {isLeaf && (
        <text
          x={0}
          y={NODE_RADIUS + 12}
          textAnchor="middle"
          className="text-xs fill-muted-foreground"
        >
          {node.frequency}
        </text>
      )}
    </g>
  );
};

interface TreeVisualizationProps {
  tree: HuffmanNode | null;
  className?: string;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({
  tree,
  className,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  
  // Calculate tree width and position nodes
  const calculateTreeLayout = (node: HuffmanNode | null, level = 0, minWidth = 0, nodeIndex = 0): {
    width: number;
    positions: { node: HuffmanNode; x: number; y: number; level: number; index: number }[];
  } => {
    if (!node) {
      return { width: 0, positions: [] };
    }

    if (!node.left && !node.right) {
      return {
        width: NODE_SIZE + NODE_MARGIN * 2,
        positions: [{ node, x: minWidth + NODE_SIZE / 2 + NODE_MARGIN, y: level * VERTICAL_SPACING, level, index: nodeIndex }],
      };
    }

    const leftResult = calculateTreeLayout(node.left, level + 1, minWidth, nodeIndex * 2 + 1);
    const rightResult = calculateTreeLayout(
      node.right,
      level + 1,
      minWidth + leftResult.width,
      nodeIndex * 2 + 2
    );

    const width = leftResult.width + rightResult.width;
    const centerX = minWidth + width / 2;

    return {
      width,
      positions: [
        { node, x: centerX, y: level * VERTICAL_SPACING, level, index: nodeIndex },
        ...leftResult.positions,
        ...rightResult.positions,
      ],
    };
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // Use optional chaining and fallback for offsetWidth to fix the TypeScript error
        const containerElement = containerRef.current as HTMLDivElement;
        const width = containerElement.offsetWidth || 800;
        setDimensions({ width, height: 400 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!tree) {
    return (
      <div className={cn("rounded-lg border bg-card overflow-hidden flex items-center justify-center p-8", className)}>
        <p className="text-muted-foreground text-center">No Huffman tree to display yet. Upload some text to generate a tree.</p>
      </div>
    );
  }

  const layout = calculateTreeLayout(tree);
  
  // Draw lines between nodes
  const renderConnections = () => {
    const connections: JSX.Element[] = [];
    const nodeMap = new Map(
      layout.positions.map(({ node, x, y }) => [node, { x, y }])
    );

    layout.positions.forEach(({ node, x, y }) => {
      if (node.left) {
        const leftPos = nodeMap.get(node.left);
        if (leftPos) {
          connections.push(
            <line
              key={`${x},${y}-${leftPos.x},${leftPos.y}`}
              x1={x}
              y1={y}
              x2={leftPos.x}
              y2={leftPos.y}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="branch"
            />
          );
          // Add 0 label for left branch
          connections.push(
            <text
              key={`label-left-${x},${y}`}
              x={(x + leftPos.x) / 2}
              y={(y + leftPos.y) / 2 - 5}
              textAnchor="middle"
              className="fill-muted-foreground text-xs font-medium"
            >
              0
            </text>
          );
        }
      }

      if (node.right) {
        const rightPos = nodeMap.get(node.right);
        if (rightPos) {
          connections.push(
            <line
              key={`${x},${y}-${rightPos.x},${rightPos.y}`}
              x1={x}
              y1={y}
              x2={rightPos.x}
              y2={rightPos.y}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              strokeDasharray="5,5"
              className="branch"
            />
          );
          // Add 1 label for right branch
          connections.push(
            <text
              key={`label-right-${x},${y}`}
              x={(x + rightPos.x) / 2}
              y={(y + rightPos.y) / 2 - 5}
              textAnchor="middle"
              className="fill-muted-foreground text-xs font-medium"
            >
              1
            </text>
          );
        }
      }
    });

    return connections;
  };

  return (
    <div 
      ref={containerRef} 
      className={cn("rounded-lg border bg-card text-card-foreground overflow-hidden", className)}
    >
      <div className="px-4 py-3 border-b bg-muted/30 flex items-center justify-between">
        <h3 className="text-base font-medium">Huffman Tree</h3>
      </div>
      <div className="p-4 overflow-auto" style={{ maxHeight: '500px' }}>
        <svg
          ref={svgRef}
          width={layout.width + NODE_MARGIN * 2}
          height={(layout.positions.length > 0 
            ? Math.max(...layout.positions.map(p => p.level)) + 1 
            : 1) * VERTICAL_SPACING + NODE_SIZE}
          className="mx-auto"
        >
          {renderConnections()}
          {layout.positions.map(({ node, x, y, index }) => (
            <NodeRenderer
              key={`node-${index}`}
              node={node}
              x={x}
              y={y}
              index={index}
              isLeaf={!node.left && !node.right}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default TreeVisualization;
