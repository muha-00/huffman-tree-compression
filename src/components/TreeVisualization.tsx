
import React, { useMemo, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface TreeNode {
  id: string;
  freq: number;
  char?: string;
  children?: TreeNode[];
}

interface TreeVisualizationProps {
  data: TreeNode | null;
  className?: string;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data, className }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Memoize tree layout calculations
  const { width, height, nodes, links } = useMemo(() => {
    if (!data) return { width: 800, height: 400, nodes: [], links: [] };
    
    // Constants for tree layout
    const nodeWidth = 60;
    const nodeHeight = 60;
    const levelHeight = 100;
    
    // Calculate tree depth and width
    const getDepth = (node: TreeNode): number => {
      if (!node.children || node.children.length === 0) return 0;
      return 1 + Math.max(...node.children.map(getDepth));
    };
    
    const getWidth = (node: TreeNode): number => {
      if (!node.children || node.children.length === 0) return 1;
      return node.children.reduce((sum, child) => sum + getWidth(child), 0);
    };
    
    const depth = getDepth(data);
    const leafCount = getWidth(data);
    
    // Calculate dimensions
    const width = Math.max(800, leafCount * nodeWidth * 2);
    const height = (depth + 1) * levelHeight + 100;
    
    // Process nodes and links
    const nodes: Array<{ 
      node: TreeNode; 
      x: number; 
      y: number; 
      delay: number; 
    }> = [];
    const links: Array<{ 
      source: { x: number; y: number }; 
      target: { x: number; y: number }; 
      delay: number; 
    }> = [];
    
    // Calculate node positions using recursive traversal
    const calculatePositions = (
      node: TreeNode, 
      level: number, 
      leftPos: number, 
      rightPos: number,
      delay: number
    ): number => {
      const width = rightPos - leftPos;
      const x = leftPos + width / 2;
      const y = level * levelHeight + 50;
      
      nodes.push({ node, x, y, delay });
      
      if (node.children && node.children.length > 0) {
        let childLeftPos = leftPos;
        
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const childWidth = width * (getWidth(child) / getWidth(node));
          const childRightPos = childLeftPos + childWidth;
          
          const childCenterX = calculatePositions(
            child, 
            level + 1, 
            childLeftPos, 
            childRightPos,
            delay + 0.1
          );
          
          links.push({
            source: { x, y: y + nodeHeight / 2 },
            target: { x: childCenterX, y: (level + 1) * levelHeight + 50 },
            delay: delay + 0.05
          });
          
          childLeftPos = childRightPos;
        }
      }
      
      return x;
    };
    
    calculatePositions(data, 0, 0, width, 0);
    
    return { width, height, nodes, links };
  }, [data]);
  
  // Setup animations
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Reset animations by clearing and re-adding classes
    const branches = svgRef.current.querySelectorAll('.branch');
    const nodeElements = svgRef.current.querySelectorAll('.node');
    
    branches.forEach(branch => {
      branch.classList.remove('branch');
      void branch.offsetWidth; // Force reflow
      branch.classList.add('branch');
    });
    
    nodeElements.forEach(node => {
      node.classList.remove('node');
      void node.offsetWidth; // Force reflow
      node.classList.add('node');
    });
  }, [nodes, links]);
  
  if (!data) {
    return (
      <div className={cn("flex items-center justify-center p-12", className)}>
        <p className="text-muted-foreground">No data to visualize</p>
      </div>
    );
  }
  
  return (
    <div className={cn("overflow-auto", className)}>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto"
      >
        {/* Links (branches) */}
        {links.map((link, index) => (
          <path
            key={`link-${index}`}
            d={`M${link.source.x},${link.source.y} L${link.target.x},${link.target.y}`}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            className="branch"
            style={{ animationDelay: `${link.delay}s` }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map(({ node, x, y, delay }) => (
          <g
            key={node.id}
            transform={`translate(${x - 30}, ${y - 30})`}
            className="node"
            style={{ '--delay': `${delay}s` } as React.CSSProperties}
          >
            <circle
              cx="30"
              cy="30"
              r="30"
              fill={node.char ? "hsl(var(--primary) / 0.2)" : "hsl(var(--secondary))"}
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              className="transition-all duration-300 hover:filter hover:drop-shadow-lg"
            />
            
            {node.char && (
              <text
                x="30"
                y="25"
                textAnchor="middle"
                fontSize="14"
                fill="hsl(var(--primary))"
                fontWeight="medium"
              >
                {node.char === 'space' ? '␣' : node.char}
              </text>
            )}
            
            <text
              x="30"
              y={node.char ? "45" : "35"}
              textAnchor="middle"
              fontSize={node.char ? "12" : "14"}
              fill="hsl(var(--foreground))"
              fontWeight={node.char ? "normal" : "medium"}
            >
              {node.freq}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default TreeVisualization;
