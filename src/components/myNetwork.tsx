'use client';

import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";
import styles from "@/styles/myNetwork.module.css";
import { nodesData, edgesData, NodeType, EdgeType } from "@/data/networkData";

const MyNetwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const nodes = new DataSet<NodeType>(nodesData);
    const edges = new DataSet<EdgeType>(edgesData);

    const options = {
      nodes: {
        shape: "box",
        font: { size: 60, color: "#111827" }, // globalsの前景色に合わせてOK
        margin: { top: 20, bottom: 20, left: 20, right: 20 }
      },
      edges: {
        color: { color: "#ccc", hover: "#fbb161", highlight: "#fbb161" },
        width: 2,
      },
      interaction: { hover: true },
      physics: {
        solver: "forceAtlas2Based",
        forceAtlas2Based: {
        gravitationalConstant: -300, // 反発を強める（絶対値↑でノードが離れる）
        centralGravity: 0.01,        // 中央へ引き戻す力を弱める
        springLength: 220,           // バネの自然長を長く（距離が伸びる）
        springConstant: 0.02,        // バネを柔らかく（距離が伸びやすい）
        avoidOverlap: 1,           // ノードの重なり回避（0〜1）
      },
        stabilization: true
      },
      groups: {
        desc: {
          color: {
            background: "#d9f99d",
            border: "#65a30d",
            highlight: { background: "#84cc16", border: "#365314" },
            hover: { background: "#bef264", border: "#65a30d" }
          }
        },
        nonDesc: {
          color: {
            background: "#dcdcdc",
            border: "#aaa",
            highlight: { background: "#dcdcdc", border: "#aaa" },
            hover: { background: "#dcdcdc", border: "#aaa" }
          }
        },
        secret: {
          color: {
            background: "#fed7aa", 
            border: "#f97316",
            highlight: { background: "#fdba74", border: "#c2410c" }, 
            hover: { background: "#fdba74", border: "#c2410c"  }  
          }
        }
      }
    } as const;

    const network = new Network(ref.current, { nodes, edges }, options);
    const FAR_ID = 18;

    network.once("afterDrawing", () => {
      network.moveNode(FAR_ID, 3000, 0);
      // DataSet 側にも固定プロパティを入れておく
      (nodes as any).update({
        id: FAR_ID,
        fixed: { x: true, y: true },
        physics: false
      });
    });

    // クリック
    network.on("click", (params: any) => {
      if (params.edges.length > 0) network.unselectAll();

      const nodeId = params.nodes[0];
      if (typeof nodeId === "number" || typeof nodeId === "string") {
        const node = nodes.get(nodeId);
        if (node && node.description) {
          setSelectedNode(node);
          setPopupPosition({ x: params.pointer.DOM.x, y: params.pointer.DOM.y });
          return;
        }
      }
      setSelectedNode(null);
      setPopupPosition(null);
    });

    // ホバー: エッジのラベルサイズ調整
    network.on("hoverNode", (params) => {
      network.getConnectedEdges(params.node).forEach((edgeId) => {
        edges.update({ id: edgeId, font: { size: 50 } });
      });
    });
    network.on("hoverEdge", (params) => {
      edges.update({ id: params.edge, font: { size: 50 } });
    });
    network.on("blurNode", (params) => {
      network.getConnectedEdges(params.node).forEach((edgeId) => {
        edges.update({ id: edgeId, font: { size: 0 } });
      });
    });
    network.on("blurEdge", (params) => {
      edges.update({ id: params.edge, font: { size: 0 } });
    });

    // クリーンアップ（メモリリーク防止）
    return () => {
      // @ts-ignore (vis-network は destroy を持つ)
      network?.destroy?.();
    };
  }, []);

  return (
    <div className={styles.root}>
      <div ref={ref} className={styles.canvas} />
      {selectedNode && popupPosition && (
        <div
          className={styles.popup}
          style={{ top: popupPosition.y + 10, left: popupPosition.x - 5 }}
        >
          <h2 className={styles.popupTitle}>{selectedNode.label}</h2>
          <div
  dangerouslySetInnerHTML={{ __html: selectedNode.description! }}
/>
        </div>
      )}
    </div>
  );
};

export default MyNetwork;
